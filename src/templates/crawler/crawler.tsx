import { useEffect } from 'react';

import { CrawlerController } from '@frontend/handlers/crawler';
import { useReduxSelector, useReduxDispatch } from '@frontend/redux/hooks';
import { PageHeader } from '@frontend/modules/page-header';
import { PAGE_LINKS } from '@frontend/react-routes/permissionLink';
import { Table } from '@frontend/components/table';
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  cursor,
  display,
  fill,
  gap,
  justifyContent,
  sizing,
  spacing,
  typography,
} from '@frontend/tailwindcss-classnames';
import { createColumnHelper } from '@tanstack/react-table';
import { Icon } from '@frontend/components/icon';

export const Crawler = () => {
  const crawlerController = CrawlerController.getInstance();
  const { crawlerState } = useReduxSelector(['crawlerState']);
  const dispatch = useReduxDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(crawlerController.getCrawlProcessByUser({}));
  }, []);

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor('url', {
      header: () => <span className={styles.headerCell}>URL</span>,
      cell: info => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor('startPage', {
      header: () => <span className={styles.headerCell}>Start page</span>,
      cell: info => <span>{info.getValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('endPage', {
      header: () => <span className={styles.headerCell}>End page</span>,
      cell: info => <span>{info.renderValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('status', {
      header: () => <span className={styles.headerCell}>Status</span>,
      cell: info => <span>{info.renderValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('action', {
      header: () => <span className={styles.headerCell}>Action</span>,
      cell: () => (
        <div className={classnames(styles.actionCell)}>
          <Icon
            type="edit"
            classNames={classnames(styles.icon, styles.editIcon)}
          />
          <Icon
            type="delete"
            classNames={classnames(styles.icon, styles.deleteIcon)}
          />
        </div>
      ),
    }),
  ];

  return (
    <div>
      <div className={classnames(styles.header)}>
        <PageHeader title={PAGE_LINKS.CRAWLER.title} />
      </div>

      <div className={classnames(styles.content)}>
        <div className={classnames(styles.contentHeader)}>
          <div className={classnames(styles.contentTitle)}>
            List Crawler Processes
          </div>
        </div>

        <Table
          columns={columns}
          data={crawlerState.crawlerProcesses ?? []}
          headerClassnames={styles.tableHeader}
          rowClassnames={styles.tableRow}
        />
      </div>
    </div>
  );
};

const useStyles = () => {
  return {
    header: classnames(spacing('mb-3')),
    content: classnames(
      backgroundColor('bg-white'),
      spacing('p-3'),
      borderRadius('rounded-xl'),
    ),
    contentHeader: classnames(spacing('mb-5')),
    contentTitle: classnames(typography('text-tx22', 'font-semibold')),
    tableHeader: classnames(backgroundColor('bg-gray-1'), sizing('h-10')),
    tableRow: classnames(sizing('h-10'), backgroundColor('hover:bg-gray-50')),

    headerCell: classnames(typography('text-gray-2')),
    pageCell: classnames(typography('text-center')),
    actionCell: classnames(
      display('flex'),
      justifyContent('justify-center'),
      alignItems('items-center'),
      gap('gap-2'),
    ),

    icon: classnames(sizing('h-4', 'w-4'), cursor('cursor-pointer')),
    editIcon: classnames(fill('fill-secondary-color')),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    deleteIcon: classnames(fill('fill-red-600')),
  };
};
