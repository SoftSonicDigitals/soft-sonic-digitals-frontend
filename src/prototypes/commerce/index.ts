import { CommerceCategoriesTypes } from "@/models/Commerce";
import { SOLUTIONS_MENU } from "../navbar";

export const COMMERCE_CATEGORIES: CommerceCategoriesTypes =
  SOLUTIONS_MENU.subMenu
    .filter((menu) => menu.subMenuHeading !== "Industries") // Filter out "Industries" category
    .flatMap((menu) =>
      menu.subMenuLinks.map((item) => ({
        // Use flatMap to map and flatten the subMenuLinks
        category_title: menu.subMenuHeading,
        category_items: [
          {
            title: item.title,
            link: item.link,
            description: item.description || "", // Add a default empty string description
          },
        ],
      }))
    );
