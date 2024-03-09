import { CommerceCategoriesTypes } from "@/models/Commerce";
import { SOLUTIONS_MENU } from "../Navbar";

export const COMMERCE_CATEGORIES: CommerceCategoriesTypes =
  SOLUTIONS_MENU.subMenu
    // Filter out "Industries" category
    .filter((menu) => menu.subMenuHeading !== "Industries")

    .map((menu) => ({
      category_title:
        menu.subMenuHeading === "Data & Experience"
          ? "Individually Outstanding, Spectacular in Combination"
          : menu.subMenuHeading,
      category_items: [...menu.subMenuLinks],
    }));
