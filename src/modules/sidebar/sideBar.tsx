import { useState } from 'react';
import { Icon } from '@frontend/components/icon';
import classnames, {
  alignItems,
  backgroundColor,
  borders,
  cursor,
  display,
  fill,
  flexDirection,
  gap,
  group,
  inset,
  position,
  sizing,
  spacing,
  typography,
} from '@frontend/tailwindcss-classnames';
import { Link, useLocation } from 'react-router-dom';
import { SideBarItemType } from './types';

export const SideBar = () => {
  const styles = useStyles();

  const links: SideBarItemType[] = [
    { title: 'User', iconType: 'user', url: '/user' },
    { title: 'Crawler', iconType: 'website', url: '/crawler' },
  ];

  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.logo)}>LOGO</div>

      <div className={classnames(styles.navigation)}>
        {links.map((link, index) => {
          return (
            <SideBarItem key={index} uniqueKey={index.toString()} {...link} />
          );
        })}
      </div>
    </div>
  );
};

const SideBarItem = (props: SideBarItemType) => {
  const { uniqueKey = '', title, iconType, url, contents } = props;
  const styles = useStyles();
  const [expandKeys, setExpandKeys] = useState<{
    [key in string]: boolean;
  }>({});

  const location = useLocation();
  const isActive = location.pathname === url;

  const handleExpandNav = (key?: string) => {
    if (key) {
      const newExpandKeys: any = JSON.parse(JSON.stringify(expandKeys));
      newExpandKeys[key] = !newExpandKeys[key];

      setExpandKeys(newExpandKeys);
    }
  };

  if (contents) {
    return (
      <div className={classnames(styles.wrapLink(expandKeys[uniqueKey]))}>
        <div
          className={classnames(styles.link(isActive))}
          onClick={() => handleExpandNav(uniqueKey)}
        >
          {iconType && (
            <Icon
              type={iconType}
              classNames={classnames(styles.iconNav(isActive))}
            />
          )}

          <div className={classnames(styles.title(isActive))}>{title}</div>
          <Icon
            type={'angle-down'}
            classNames={classnames(styles.iconNav(false), styles.iconDropdown)}
          />
        </div>
        {expandKeys[uniqueKey] && (
          <div className={classnames(styles.wrapChildLink)}>
            {contents.map((content, index) => (
              <SideBarItem
                key={`${uniqueKey}_${index}`}
                uniqueKey={`${uniqueKey}_${index}`}
                {...content}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link to={url ?? ''} className={classnames(styles.link(isActive))}>
      {iconType && (
        <Icon
          type={iconType}
          classNames={classnames(styles.iconNav(isActive))}
        />
      )}

      <div className={classnames(styles.title(isActive))}>{title}</div>
    </Link>
  );
};

const useStyles = () => {
  return {
    root: classnames(sizing('w-full')),
    logo: classnames(
      typography('font-bold', 'text-tx22'),
      spacing('mb-10', 'px-5'),
    ),
    navigation: classnames(display('flex'), flexDirection('flex-col')),
    link: (active: boolean) =>
      classnames(
        display('flex'),
        spacing('py-2', 'px-5'),
        alignItems('items-center'),
        gap('gap-2'),
        group('group'),
        cursor('cursor-pointer'),
        position('relative'),
        active
          ? borders(
              'border-r-4',
              'hover:border-primary-color',
              'border-secondary-color',
            )
          : null,
      ),
    iconNav: (active: boolean) =>
      classnames(
        sizing('w-6', 'h-5'),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        active ? fill('fill-secondary-color') : fill('fill-gray-500'),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        group('group-hover:fill-primary-color'),
      ),
    iconDropdown: classnames(position('absolute'), inset('right-5')),
    title: (active: boolean) =>
      classnames(
        active ? typography('text-secondary-color') : typography('text-gray-3'),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        group('group-hover:text-primary-color'),
      ),
    wrapLink: (isExpand?: boolean) =>
      classnames(isExpand ? backgroundColor('bg-gray-100') : null),
    wrapChildLink: classnames(spacing('pl-8')),
  };
};
