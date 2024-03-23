import { IconType } from "react-icons";

export type FooterLinksType = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
}[];

export type SocialsType = {
  socialPlatforms: {
    name: string;
    icon: IconType;
    link: string;
  }[];
  contactNumber: string;
  email: string;
};
