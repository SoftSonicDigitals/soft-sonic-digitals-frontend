import {
  ContactFooterLinks,
  ContactTestimonialType,
  FormDropDownOptionsType,
  WhereToFindType,
} from "@/models/contact_page";

export const CONTACT_TESTIMONIALS: ContactTestimonialType = [
  {
    testimonial:
      "“Magneto makes it really easy for customers to see the trading signals and act on them.”",
    profile: "profile-1.png",
    name: "Markus Heitkoetter",
    title: "CEO, Rockwell Trading Services, LLC",
  },
  {
    testimonial: "“They are a joy to work with and they are always positive.”",
    profile: "profile-2.png",
    name: "Monica McLeod Sawyer",
    title: "Owner of The One",
  },
  {
    testimonial:
      "“During our partnership with Magneto, we’ve continuously refined our goals, grown our business, and clarified our product.”",
    profile: "profile-3.png",
    name: "Ryan Hyde",
    title: "CEO, RPH Engineering",
  },
  {
    testimonial:
      "“They’re very helpful, they met the deadlines, and they take care of all of my requirements. We are pleased with the deliverables that they receive from Magneto IT Solutions.”",
    profile: "profile-4.png",
    name: "Ranjith K.K",
    title: "IT Manager, Ashrafs W.L.L",
  },
];

export const WHERE_TO_FIND: WhereToFindType = [
  {
    country: "Australia",
    locations: [
      {
        image: "sydney.webp",
        name: "sydney",
        email: "info@magnetoitsolutions.com",
        contactNo: "+61-452581620",
        address:
          "Unit 3, 248 Flushcombe Road,Blacktown NSW 2148 , Sydney , Australia.",
      },
    ],
  },
];

export const CONTACT_FOOTER_LINKS: ContactFooterLinks = [
  { title: "Sales", email: "info@magnetoitsolutions.com", link: "/" },
  { title: "Career", email: "hiring@magnetoitsolutions.com", link: "/" },
  {
    title: "Media & Press",
    email: "outreach@magnetoitsolutions.com",
    link: "/",
  },
  { title: "Skype", handle: "marketing_19207" },
];

export const FORM_SERVICES: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "Ecommerce Consultation", title: "Ecommerce Consultation" },
  {
    value: "Ecommerce Development",
    title: "Ecommerce Development",
  },
  {
    value: "Ecommerce Replatforming",
    title: "Ecommerce Replatforming",
  },
  {
    value: "Mobile Application Development",
    title: "Mobile Application Development",
  },
  {
    value: "Web Application Development",
    title: "Web Application Development",
  },
  {
    value: "Digital Marketing",
    title: "Digital Marketing",
  },
  {
    value: "UI & UX design",
    title: "UI & UX design",
  },
];

export const FORM_BUDGET: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "$10k+", title: "$10k+" },
  { value: "$50k+", title: "$50k+" },
  { value: "$100k+", title: "$100k+" },
  { value: "$200k+", title: "$200k+" },
  { value: "$500k+", title: "$500k+" },
];

export const FORM_REQUIREMENTS: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "Hire Dedicated Team", title: "Hire Dedicated Team" },
  { value: "New Project", title: "New Project" },
  { value: "Existing Project", title: "Existing Project" },
];

export const FORM_AUSTRALIAN_STATES: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "NSW", title: "New South Wales" },
  { value: "VIC", title: "Victoria" },
  { value: "QLD", title: "Queensland" },
  { value: "SA", title: "South Australia" },
  { value: "WA", title: "Western Australia" },
  { value: "TAS", title: "Tasmania" },
  { value: "ACT", title: "Australian Capital Territory" },
  { value: "NT", title: "Northern Territory" },
];

export const FORM_START: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "Right now", title: "Right now" },
  { value: "In few weeks", title: "In few weeks" },
  { value: "In few months", title: "In few months" },
  { value: "Not sure", title: "Not sure" },
];
