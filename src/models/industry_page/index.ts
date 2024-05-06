export type RecordOne = Record<string, Section>;

export type IndustryPage = {
  hero: Hero;
  sectionOne?: Section;
  sectionTwo?: Section;
  sectionThree?: Section;
  sectionFour?: Section;
  sectionFive?: Section;
  sectionSix?: Section;
};

type Hero = {
  imgPath: string;
  heading: string;
  description: string;
  btnText: string;
};

type Section = {
  heading: string;
  subHeading: string;
  description: string;
  imgPath: string;
  listArray?: string[];
};
