import { IndustryPage } from "@/models/industry_page";
import { describe } from "node:test";

export const JEWELLERY: IndustryPage = {
  hero: {
    imgPath: "/industry/hero.webp",
    heading: "Transform your Jewelry Business Online!",
    description:
      "We are the One Stop Shop for all your Jewelry website design & development needs.",
    btnText: "REQUEST A PROPOSAL",
  },

  sectionOne: {
    heading: "Digital Asset Management",
    subHeading:
      "DAM is a centralized platform for jewelry design asset sharing, version control, and task assignment. It enables smooth communication, enhances collaboration, and improves overall workflow management. It can effortlessly conduct global jewelry design collaboration support and co-marketing campaigns for multiple stakeholders, such as designers, photographers, marketers, and customers. It will help to reduce offline marketing material wastage.",
    description:
      "Efficient design inventory management is essential to accurately track and categorize jewelry and diamond assets. Media asset management tools help businesses organize design inventory, track stock levels, find specific items, and maintain a consistent brand image. It saves time and reduces errors associated with manual inventory management processes.",
    imgPath: "/industry/info1.png",
  },

  sectionTwo: {
    heading: "Jewelry Digital Catalog",
    subHeading:
      "Introduce digital catalogs to present your product line to B2B and B2C customers. It will easily increase customer satisfaction, sales, and company growth.",
    description:
      "Digital catalogs are very useful for streamlining product designs with sales teams and customers. It eliminates the need for hardcopy catalogs and time-consuming file sharing. It allows sales teams and clients to create their own catalogs without the help of designers as per their needs. They can even store their favorite designs for future",
    imgPath: "/industry/Digital_catalog.png",
    listArray: [
      "Cutdown time for manual catalog design",
      "Reduce designer cost",
      "Choice of numerous predefined templates",
      "Create a catalog as per client needs by the sales team",
      "Quick sales turnaround time",
      "Explore a diverse range of styles",
    ],
  },
  sectionThree: {
    heading: "Product Information Management (PIM)",
    subHeading:
      "It centralizes all product data in a single repository, including diamond specifications, gemstone details, metal types, pricing, certifications, and imagery. It ensures that all product information is consistent, accurate, and up-to-date across various sales channels.",
    description:
      "Jewelry brands use a PIM solution. This solution helps them handle and share consistent product information. They can use it for diamond details and metal type. They can use it on their website, online marketplaces, apps, social media, and physical stores.",
    imgPath: "/industry/product-information-management.png",
    // in px
    imgHeight: 710,
    imgWidth: 1117,
  },
  sectionFour: {
    heading: "Product Ring Builder",
    subHeading:
      "Let your customers become the designers of their own jewelry. With the Ring & Jewelry Builder Feature",
    description:
      "Jewelry builders include all components, including pendants, necklaces, earrings, and rings. This unique function allows the buyer to design their own jewelry. They start the process from scratch and, in a way, they become designers of their own jewelry. Both B2B and B2C jewelry websites can implement this option. The 4 actions listed below can help you obtain the jewel of your choice:",
    imgPath: "/industry/product-ring-bilder.png",
    listArray: [
      "Choose the diamond or the setting first",
      "Select every aspect of the diamond, including its type, cut, size, color, and shape",
      "Choose all the settings attributes, such as head, metal, and shank",
      "Enter the information, make the payment, and get it delivered",
    ],
  },

  sectionFive: {
    heading: "Jewelry Brands Commission Management",
    subHeading:
      "This module is a must-have tool for the jewelry industry. It comes with a live dashboard for monitoring commission trends. It helps to easily analyze sales and commission data based on teams, brands, stores, Persons, regions, products, etc.",
    description:
      "Real-time visibility into commission trends and performance data helps businesses make informed decisions. It will recognize exceptional sales performance and effectively manage commission and incentives. It is helpful for seamlessly managing the commission and customer data in a single place.",
    imgPath: "/industry/spiff-commission.png",
  },

  sectionSix: {
    heading: "Digital Order Management",
    subHeading:
      "The digital order management solution allows customers to browse and select products from an online platform. It can then be approved by the salesperson to process the order. It is integrated into the business's ERP system for further processing. It also includes inventory management and fulfillment.",
    description:
      "It helps to get accurate and efficient handling of customer orders. Also, it reduces manual efforts and improves order fulfillment in the jewelry industry.",
    imgPath: "/industry/digital-order-management-system.png",
  },

  sectionSeven: {
    heading: "Seamless Brand Collaboration",
    subHeading:
      "Co-marketing in this industry is possible through collaboration between jewelry brands and shops. This can involve joint promotional campaigns and product launches.",
    description:
      "This solution is useful for running collaborative marketing efforts and establishing brand familiarity. That helps to improve sales ratios. This can be executed by using a real-time cooperation system. That gives both parties quick visibility and accessibility to each other's customers.",
    imgPath: "/industry/Seamless-brand.png",
  },
  sectionEight: {
    heading: "Jewellry Design Comment & Versioning system",
    subHeading: "",
    description:
      "A jewelry design comment and versioning system holds importance for a jewelry business. It helps to get accurate integration of customer expectations into jewelry designs. That results in enhanced customer satisfaction.\n\nThis system allows businesses to track and preserve design versions. Facilitating collaboration and effective communication. The system also serves as a valuable tool for ongoing improvement. It allows businesses to identify areas for enhancement and cater to customer preferences.",
    imgPath: "/industry/design-comment-1.png",
  },
  sectionNine: {
    heading: "Task Management System",
    subHeading: "",
    description:
      "Implementing a task management system in the jewelry business acts as a comprehensive to-do manager. It allows users to save and organize tasks in a hierarchical structure.\n\n It will help the jewelry business to create tasks for various activities. Includes designing new jewelry pieces, sourcing materials, conducting quality checks, and managing inventory.\n\n Each task can be assigned to specific team members with designated start and due dates. It will help to boost productivity.",
    imgPath: "/industry/design-comment-1.png",
  },

  sectionTen: {
    heading: "Product Customization",
    subHeading:
      "Product customization has become a “must-have” feature in any kind of Jewelry website. Add this to your website now!",
    description:
      "Customization in the jewelry industry is the ability to fulfill user needs. It helps them to design products that reflect their style, sentiment, and occasion.\n\nBy offering product customization options, brands can separate themselves from competitors. Customers can personalize their jewelry by picking the metal type, gemstone, design, and color. It will boost brand loyalty by building emotional ties with the brand.",
    imgPath: "/industry/product-customization.png",
    // in px
    imgHeight: 604,
    imgWidth: 916,
  },

  features: [
    {
      heading: "360 degree view",
      subHeading: "Add this amazing, eye-catching tool to your website design",
      description:
        "This module is useful. At the same time, it is an eye-catching feature of your jewelry website design. It helps the customers to see their favorite jewelry products from all angles. This way, accurate customer feedback for jewelry can reach the design teams. The recommended changes can be made to the final product. It is also a pleasant visual experience for the customers while browsing.",
      imgPath: "/industry/360-view.png",
    },
    {
      heading: "Warranty claim",
      subHeading:
        "Experience hassle-free warranty claims for the jewelry and diamond industries.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/warranty-claim.png",
    },
    {
      heading: "Third party platforms",
      subHeading:
        "Integrate with third-party platforms for better product visibility.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/third-party-platform.png",
    },
    {
      heading: "Search & Filtering",
      subHeading:
        "Simplify your jewelry search and filtering with a refined tool.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/product-search-filtering.png",
    },
    {
      heading: "Display management",
      subHeading:
        "Digital display management to increase brand visibility and communication.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/display-management.png",
    },
    {
      heading: "Mood-board design",
      subHeading: "Present your jewelry ideas visually with stunning effects.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/mood-board.png",
    },
    {
      heading: "Make to order",
      subHeading:
        "Allow your customer to provide jewelry reviews and feedback in real-time digitally.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/make-to-order.png",
    },
    {
      heading: "Chatbot support",
      subHeading:
        "Chatbots in jewelry eCommerce can boost customer support by handling simple inquiries effectively.",
      description:
        "The online warranty claim forms drop the need for physical invoices. It allows customers to upload their claims from anywhere conveniently. With secure registration and global validity, customers can enjoy peace of mind. It simplifies the warranty claim process by reducing paperwork for both parties.",
      imgPath: "/industry/chatbot.png",
    },
  ],
};

export const SPECIALIZATION_TILES_DATA = [
  { imgPath: "/industry/b2c.png", title: "For B2C Business Model" },
  { imgPath: "/industry/b2b.png", title: "For B2B Business Model" },
  { imgPath: "/industry/d2c.png", title: "For D2C Business Model" },
  { imgPath: "/industry/api.png", title: "For Flawless API Integration" },
  {
    imgPath: "/industry/marketplace.png",
    title: "For Marketplace Development",
  },
];
