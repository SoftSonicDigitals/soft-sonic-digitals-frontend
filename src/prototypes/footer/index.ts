import { FooterLinksType, SocialsType } from "@/models/footer";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const SOCIALS: SocialsType = {
  socialPlatforms: [
    {
      name: "facebook",
      icon: FaFacebookSquare,
      link: "/",
    },
    {
      name: "twitter",
      icon: FaSquareXTwitter,
      link: "/",
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      link: "/",
    },
  ],
  contactNumber: "+1-646-205-8151",
  email: "info@magnetoitsolutions.com",
};

export const FOOTER_LINKS: FooterLinksType = [
  {
    title: "Quick Links",
    links: [
      { title: "Company", link: "/" },
      { title: "Referrals", link: "/" },
      { title: "Write For Us", link: "/" },
      { title: "Career", link: "/" },
      { title: "Partners", link: "/" },
      { title: "Contact", link: "/" },
      { title: "Privacy Policy", link: "/" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { title: "B2C eCommerce", link: "/" },
      { title: "B2B eCommerce", link: "/" },
      { title: "Marketplace", link: "/" },
      { title: "Headless Commerce", link: "/" },
      { title: "Mobile Commerce", link: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Consulting", link: "/" },
      { title: "Design (UI/UX)", link: "/" },
      { title: "Development", link: "/" },
      { title: "Integration", link: "/" },
      { title: "Support", link: "/" },
      { title: "CRO", link: "/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { title: "Magento", link: "/" },
      { title: "OroCommerce", link: "/" },
      { title: "Pimcore", link: "/" },
      { title: "Commercetools", link: "/" },
      { title: "Fabric", link: "/" },
    ],
  },
  {
    title: "Web",
    links: [
      { title: "Digital Transformation", link: "/" },
      { title: "Software Development", link: "/" },
      { title: "Symfony Development", link: "/" },
      { title: "Node Js Development", link: "/" },
      { title: "React Js Development", link: "/" },
      { title: "Laravel Development", link: "/" },
    ],
  },
];
