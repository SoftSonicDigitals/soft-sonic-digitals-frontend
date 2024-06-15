export type B2BDigitalEcommerceInfo = {
  videoTitle?: string;
  videoLink?: string;
  infoArray: {
    title: string;
    description: string;
  }[];
};

export type B2BDigitizationList = { title: string; list: string[] }[];

export type B2BDropdownList = {
  title: string;
  description: string;
  iconPath?: string;
}[];

export type B2BIndustriesType = {
  title: string;
  iconPath: string;
}[];

export type B2BFaqList = {
  question: string;
  answer: string | string[];
}[];
