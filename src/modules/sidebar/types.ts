import { IconType } from '@frontend/components/icon/types';

export type SideBarItemType = {
  title: string;
  uniqueKey?: string;
  url?: string;
  iconType?: IconType;
  contents?: SideBarItemType[];
};
