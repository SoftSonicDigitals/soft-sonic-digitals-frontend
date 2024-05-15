export type IndustriesServedArray = {
  name: string;
  image: string;
}[];

export type EcommerceFrameworksArr = {
  name: string;
  logo: string;
}[];

export type IndustryPage = {
  hero: Hero;
  sectionOne?: Section;
  sectionTwo?: Section;
  sectionThree?: Section;
  sectionFour?: Section;
  sectionFive?: Section;
  sectionSix?: Section;
  sectionSeven?: Section;
  sectionEight?: Section;
  sectionNine?: Section;
  sectionTen?: Section;
  featuresSection: { sectionHeading: string; features: Features[] };
  bannerSection: Banner;
};

type Features = {
  imgPath: string;
  heading: string;
  subHeading: string;
  description: string;
};

type Hero = {
  imgPath: string;
  heading: string;
  description: string;
  btnText: string;
};
type Banner = {
  title: string;
  description: string;
  btnText: string;
};
type Section = {
  heading: string;
  subHeading: string;
  description: string;
  imgPath: string;
  listArray?: string[];
  imgWidth?: number;
  imgHeight?: number;
};
