export const SOLUTIONS = "Solutions";
export const PLATFORM = "PLATFORM";

export const SOLUTIONS_MENU = {
  title: SOLUTIONS,
  subMenu: [
    {
      subMenuHeading: "By Business",
      subMenuLinks: [
        { title: "B2C ecommerce", link: "/" },
        { title: "B2B ecommerce", link: "/" },
        { title: "Multi-Vendor Marketplace", link: "/" },
      ],
    },
    {
      subMenuHeading: "By Architecture & Channel",
      subMenuLinks: [
        { title: "Composable Commerce", link: "/" },
        { title: "Headless Commerce", link: "/" },
        { title: "Hyva Development", link: "/" },
        { title: "Mobile Commerce", link: "/" },
      ],
    },
    {
      subMenuHeading: "Industries",
      subMenuLinks: [
        { title: "Jewellery & Diamond", link: "/" },
        { title: "Food & Grocery", link: "/" },
        { title: "Furniture & Home Decor", link: "/" },
        { title: "Manufacturing", link: "/" },
        { title: "Distribution", link: "/" },
        { title: "Automotive", link: "/" },
        { title: "Health & Beauty", link: "/" },
        { title: "Electronics", link: "/" },
        { title: "Stones", link: "/" },
        { title: "Floristry", link: "/" },
      ],
    },
    {
      subMenuHeading: "Data & Experience",
      subMenuLinks: [
        { title: "PIM- Product Information Management", link: "/" },
        { title: "DAM- Digital Asset Management", link: "/" },
        { title: "DXP- Digital Expeience Platform", link: "/" },
        { title: "MDM- Master Data Management", link: "/" },
      ],
    },
  ],
};

export const SIDE_MENU = [
  {
    title: SOLUTIONS,
    subMenu: [
      ...SOLUTIONS_MENU.subMenu[0].subMenuLinks,
      ...SOLUTIONS_MENU.subMenu[1].subMenuLinks,
      ...SOLUTIONS_MENU.subMenu[3].subMenuLinks,
    ],
  },
];
