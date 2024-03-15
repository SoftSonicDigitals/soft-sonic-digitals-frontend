import {
  PLATFORM,
  SOLUTIONS,
  RESOURCES,
  INDUSTRY,
  CUSTOMER,
} from "@/constants/navbar";

import {
  PlatformMenuType,
  SolutionsMenuType,
  ResourcesMenuType,
  SideMenuType,
} from "@/models/navbar";

export const SOLUTIONS_MENU: SolutionsMenuType = {
  title: SOLUTIONS,
  description:
    "We push ourselves. We push technology. And we push the boundaries of conventional commerce.",
  subMenu: [
    {
      subMenuHeading: "By Business",
      subMenuLinks: [
        {
          title: "B2C ecommerce",
          link: "/",
          description: "Create customer centric experiences",
        },
        {
          title: "B2B ecommerce",
          link: "/",
          description: "Empower your wholesale operations",
        },
        {
          title: "Multi-Vendor Marketplace",
          link: "/",
          description: "Connect buyers and sellers seamlessly",
        },
      ],
    },
    {
      subMenuHeading: "By Architecture & Channel",
      subMenuLinks: [
        {
          title: "Composable Commerce",
          link: "/",
          description: "Flexible, bespoken eCommerce solution",
        },
        {
          title: "Headless Commerce",
          link: "/",
          description: "Liberate your platform with a frontend",
        },
        {
          title: "Hyva Development",
          link: "/",
          description: "Custom theme development solution",
        },
        {
          title: "Mobile Commerce",
          link: "/",
          description: "Enrich the Mobile shopping experience",
        },
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
        {
          title: "PIM- Product Information Management",
          link: "/",
          description: "Product Information Management",
        },
        {
          title: "DAM- Digital Asset Management",
          link: "/",
          description: "Digital Asset Management",
        },
        {
          title: "DXP- Digital Expeience Platform",
          link: "/",
          description: "Digital Expeience Platform",
        },
        {
          title: "MDM- Master Data Management",
          link: "/",
          description: "Master Data Management",
        },
        {
          title: "DCP- Digital Commerce Platform",
          link: "/",
          description: "Digital Commerce Platform",
        },
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
      logoName: "Magento-logo.pngw3.webp",
      iconWidth: "116px",
      link: "/",
    },
    {
      title: "Adobe Commerce",
      description:
        "With the help of Adobe Commerce, we have delivered over 150 successful projects for clients of all sizes and from different industries over the span of 12 years.",
      logoName: "adobe.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Shopify Plus",
      description:
        "Shopify is a well-known eCommerce development platform that provides a user-friendly interface, customizable themes, and various functions to efficiently create and handle eCommerce stores.",
      logoName: "Shopifypluss.pngw3.webp",
      iconWidth: "156px",
      link: "/",
    },
    {
      title: "Orocommerce",
      description:
        "It’s a natural addition to our B2B digital commerce arsenal and will enable us to offer our customers an advanced solution for their complex B2B commerce scenarios.",
      logoName: "oro-commerce.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Pimcore",
      description:
        "PiMcore is an industry leader in data and experience management platforms that manage, engage, and distribute any type of digital data for any channel and provide amazing personalized customer experience.",
      logoName: "pimcore.pngw3.webp",
      iconWidth: "168px",
      link: "/",
    },
    {
      title: "Commercetools",
      description:
        "Commercetool is an API-first and ready-made commerce building block or add-on to your own infrastructure and runs them as scale.",
      logoName: "commercetools.pngw3.webp",
      iconWidth: "164px",
      link: "/",
    },
  ],
};

export const SIDE_MENU: SideMenuType = [
  {
    title: SOLUTIONS,
    subMenu: SOLUTIONS_MENU.subMenu.flatMap(
      ({ subMenuHeading, subMenuLinks }) => {
        if (subMenuHeading !== "Industries") return subMenuLinks;
        else return [];
      }
    ),
  },
  {
    title: PLATFORM,
    subMenu: PLATFORM_MENU.subMenu.map(({ title, link }) => ({ title, link })),
  },
  {
    title: INDUSTRY,
    subMenu: SOLUTIONS_MENU.subMenu.flatMap(
      ({ subMenuHeading, subMenuLinks }) => {
        if (subMenuHeading === "Industries") return subMenuLinks;
        else return [];
      }
    ),
  },
  {
    title: RESOURCES,
    subMenu: RESOURCES_MENU.submenu,
  },
  {
    title: CUSTOMER,
    link: "/",
  },
];
