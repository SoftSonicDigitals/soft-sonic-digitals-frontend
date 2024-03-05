type SolutionsSubMenuLink = {
  title: string;
  link: string;
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
  iconPath: string;
  iconWidth: string;
  link: string;
};

export type PlatformMenuType = {
  title: string;
  description: string;
  subMenu: PlatformSubMenuItem[];
};
