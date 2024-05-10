export type RecordOne = Record<string, Section>;

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
  bannerSection: Banner;
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
