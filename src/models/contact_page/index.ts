export type ContactTestimonialType = {
  testimonial: string;
  profile: string;
  name: string;
  title: string;
}[];

type location = {
  image: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
};

export type WhereToFindType = {
  country: string;
  locations: location[];
}[];

export type ContactFooterLinks = {
  title: string;
  email?: string;
  handle?: string;
  link?: string;
}[];

export type FieldId =
  | "name"
  | "email"
  | "mobile"
  | "company"
  | "address_line"
  | "postcode"
  | "state"
  | "service"
  | "budget"
  | "requirement"
  | "start"
  | "project_details";

export type FormFields = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  address_line: string;
  state: string;
  postcode: string;
  service: string;
  budget: string;
  requirement: string;
  start: string;
  project_details: string;
};

export type FormDropDownOptionsType = {
  value: string;
  title: string;
}[];
