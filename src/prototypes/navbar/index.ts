import { PLATFORM, SOLUTIONS, RESOURCES } from "@/constants/navbar";
import {
  PlatformMenuType,
  SolutionsMenuType,
  ResourcesMenuType,
} from "@/models/navbar";

export const SOLUTIONS_MENU: SolutionsMenuType = {
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

export const RESOURCES_MENU: ResourcesMenuType = {
  title: RESOURCES,
  submenu: [
    { title: "Blogs", link: "/" },
    { title: "Infographics", link: "/" },
    { title: "Press Releases", link: "/" },
    { title: "White Papers", link: "/" },
  ],
};

export const PLATFORM_MENU: PlatformMenuType = {
  title: PLATFORM,
  description:
    "Selecting the right platform for the right requirements is an art. We help you turn it into science.",
  subMenu: [
    {
      title: "Magneto",
      description:
        "Magento is a robust eCommerce platform with extensive features, making it a comprehensive solution for online businesses.",
      iconPath: "/Magento-logo.pngw3.webp",
      iconWidth: "116px",
      link: "/",
    },
    {
      title: "Adobe Commerce",
      description:
        "With the help of Adobe Commerce, we have delivered over 150 successful projects for clients of all sizes and from different industries over the span of 12 years.",
      iconPath: "/adobe.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Shopify Plus",
      description:
        "Shopify is a well-known eCommerce development platform that provides a user-friendly interface, customizable themes, and various functions to efficiently create and handle eCommerce stores.",
      iconPath: "/Shopifypluss.pngw3.webp",
      iconWidth: "156px",
      link: "/",
    },
    {
      title: "Orocommerce",
      description:
        "It’s a natural addition to our B2B digital commerce arsenal and will enable us to offer our customers an advanced solution for their complex B2B commerce scenarios.",
      iconPath: "/oro-commerce.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Pimcore",
      description:
        "PiMcore is an industry leader in data and experience management platforms that manage, engage, and distribute any type of digital data for any channel and provide amazing personalized customer experience.",
      iconPath: "/pimcore.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Commercetools",
      description:
        "Commercetool is an API-first and ready-made commerce building block or add-on to your own infrastructure and runs them as scale.",
      iconPath: "/commercetools.pngw3.webp",
      iconWidth: "164px",
      link: "/",
    },
  ],
};

export const SIDE_MENU = [
  {
    title: SOLUTIONS,
    subMenu: SOLUTIONS_MENU.subMenu.flatMap(
      ({ subMenuHeading, subMenuLinks }) =>
        subMenuHeading !== "Industry" ? subMenuLinks : null
    ),
  },
  {
    title: PLATFORM,
    subMenu: PLATFORM_MENU.subMenu.map(({ title, link }) => ({ title, link })),
  },
  {
    title: RESOURCES,
    subMenu: RESOURCES_MENU.submenu,
  },
];
