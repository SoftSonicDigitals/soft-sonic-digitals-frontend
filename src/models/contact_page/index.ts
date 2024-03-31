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

export type FormFields = {
  name: string;
  email: string;
  mobile: string;
  company: string;
  service: string;
  budget: string;
  requirement: string;
  start: string;
  details: string;
};

export type FormDropDownOptionsType = {
  value: string;
  title: string;
}[];
