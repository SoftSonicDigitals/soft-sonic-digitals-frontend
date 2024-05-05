export type IndustryPage = {
  hero: Hero;
  section1: Section;
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
};
