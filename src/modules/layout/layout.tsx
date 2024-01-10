import { Header } from '@frontend/modules/header';
import { LayoutProps } from './types';
import { SideBar } from '../sidebar';
import classnames, {
  backgroundColor,
  display,
  flex,
  sizing,
  spacing,
} from '@frontend/tailwindcss-classnames';

export const Layout = (props: LayoutProps) => {
  const styles = useStyles();

  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.sidebar)}>
        <SideBar />
      </div>
      <div className={classnames(styles.content)}>
        <div className={classnames(styles.header)}>
          <Header />
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const useStyles = () => {
  return {
    root: classnames(display('flex')),
    sidebar: classnames(
      sizing('w-52', 'h-screen'),
      spacing('pt-5'),
      backgroundColor('bg-white'),
    ),
    header: classnames(spacing('mb-5')),
    content: classnames(flex('flex-1'), spacing('px-5', 'pt-5')),
  };
};
