import classnames, { typography } from '@frontend/tailwindcss-classnames';
import { PageHeaderProps } from './types';

export const PageHeader = (props: PageHeaderProps) => {
  const { title } = props;
  const styles = useStyles();

  return (
    <div>
      <div className={classnames(styles.title)}>{title}</div>
    </div>
  );
};

const useStyles = () => {
  return {
    title: classnames(
      typography('text-tx26', 'text-secondary-color', 'font-bold'),
    ),
  };
};
