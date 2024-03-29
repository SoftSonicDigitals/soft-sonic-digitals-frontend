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
