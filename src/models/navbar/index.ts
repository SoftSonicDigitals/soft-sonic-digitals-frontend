type SubMenuLink = {
  title: string;
  link: string;
};

type SubMenu = {
  subMenuHeading: string;
  subMenuLinks: SubMenuLink[];
};

type SolutionsMenuType = {
  title: string;
  description: string;
  subMenu: SubMenu[];
};

type ResourcesItemType = {
  title: string;
  link: string;
};

export type ResourcesMenuType = {
  title: string;
  submenu: ResourcesItemType[];
};
