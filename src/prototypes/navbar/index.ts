import { PLATFORM, SOLUTIONS } from "@/constants/navbar";

export const SOLUTIONS_MENU = {
  title: SOLUTIONS,
  description:
    "We push ourselves. We push technology. And we push the boundaries of conventional commerce.",
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

export const PLATFORM_MENU = {
  title: PLATFORM,
  description:
    "Selecting the right platform for the right requirements is an art. We help you turn it into science.",
  subMenu: [
    {
      title: "Magneto",
      description:
        "Magento is a robust eCommerce platform with extensive features, making it a comprehensive solution for online businesses.",
      icon: "",
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
