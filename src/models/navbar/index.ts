type SolutionsSubMenuLink = {
  title: string;
  link: string;
  description?: string;
};

type SolutionsSubMenu = {
  subMenuHeading: string;
  subMenuLinks: SolutionsSubMenuLink[];
};

export type SolutionsMenuType = {
  title: string;
  description: string;
  subMenu: SolutionsSubMenu[];
};

type PlatformSubMenuItem = {
  title: string;
  description: string;
  logoName: string;
  iconWidth: string;
  link: string;
};

export type PlatformMenuType = {
  title: string;
  description: string;
  subMenu: PlatformSubMenuItem[];
};

type ResourcesItemType = NavLink;

export type ResourcesMenuType = {
  title: string;
  submenu: ResourcesItemType[];
};

type subMenuType = NavLink;

type NavItemLinksType = {
  title: string;
  subMenu?: subMenuType[];
  link?: string;
};

export type NavLink = {
  title: string;
  link: string;
};

export type SideMenuType = NavItemLinksType[];
