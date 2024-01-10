import { TTailwindString } from '@frontend/tailwindcss-classnames';

export type IconProps = {
  classNames?: TTailwindString;
  type: IconType;
};

export type IconType =
  | 'bell'
  | 'angle-down'
  | 'user'
  | 'website'
  | 'edit'
  | 'delete';
