import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

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
  | "estimated_start_time"
  | "project_details";

export interface FormFields {
  name: string;
  email: string;
  mobile: string;
  company?: string;
  address_line?: string;
  state?: string;
  postcode?: string;
  service: string;
  budget: string;
  requirement: string;
  estimated_start_time: string;
  project_details?: string;
}

export type InputField = {
  fieldId: FieldId;
  maxLength?: number;
  label: string;
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
  customValidation?: ValidationRule<RegExp>;
  isRequired?: boolean;
  placeholder?: string;
  inputType?: string;
};

export type SelectField = InputField & {
  options: {
    title: string;
    value: string;
  }[];
};

export type FormDropDownOptionsType = {
  value: string;
  title: string;
}[];
