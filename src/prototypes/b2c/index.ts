import { ConcernsAndExpertise, WeAreDifferentReasons } from "@/models/b2c";

export const WE_ARE_DIFF_REASONS: WeAreDifferentReasons = {
  title: "Here's how we're different",
  reasons: [
    {
      reason: "We listen",
      description:
        "We've interviewed over 100 retail store owners and experts to understand their unique challenges",
    },
    {
      reason: "We focus on your needs, not ours",
      description:
        "We play actively with your existing systems and find a way to integrate with new ones",
    },
    {
      reason: "We don't follow trends,we set them",
      description:
        "Our proven methods and creative approach can help you stand out",
    },
  ],
};

const RETAILERS_CONCERNS = {
  title: "Retailer’s Immediate Concerns while going digital",
  list: [
    {
      title: "Quick time-to-market",
      description: "We've got your back.",
    },
    {
      title: "No more complex backend systems",
      description: "We simplify them for you.",
    },
    {
      title: "Easily Modify without developers' availability",
      description: "We designate you to take control.",
    },
    {
      title: "Easily integrated with existing ERP, POS, and loyalty systems",
      description: "We know your challenges.",
    },
    {
      title: "Add new features and functionalities rapidly",
      description: "Buckle up. We're full of innovative & futuristic ideas.",
    },
    {
      title: "SEO is in safe hands",
      description:
        "We know how to rank on Google so your store can be easily seen.",
    },
    {
      title: "Security is a top priority",
      description: "We guarantee Fort Knox-level protection for your store.",
    },
    {
      title: "Efficient and streamlined operations",
      description: "We're the efficiency whisperers.",
    },
  ],
};

const RETAILERS_GOALS = {
  title: "Retailer’s Long-Term Goals, Our Expertise",
  list: [
    {
      title: "Gain and retain market share",
      description: "We'll outsmart the competition.",
    },
    {
      title: "Offer a seamless omnichannel experience",
      description: "Your customers will flow effortlessly.",
    },
    {
      title: "Improve data quality and management",
      description: "Insights that can ease your work.",
    },
    {
      title: "Reduce costs through automation",
      description: "Efficiency for greater growth.",
    },
    {
      title: "Personalize your offerings for increased sales",
      description: "Tailored experiences that convert.",
    },
    {
      title: "Enhance user experience and brand image",
      description: "Build a store they'll love and trust.",
    },
    {
      title: "The online store needs a refresh",
      description:
        "Ditch the outdated platform, and let's rebuild something exciting!",
    },
  ],
};

export const CONCERNS_AND_GOALS: ConcernsAndExpertise[] = [
  RETAILERS_CONCERNS,
  RETAILERS_GOALS,
];

export const HELP_PROVIDED = [
  { title: "Technology Platform Assessments" },
  { title: "Store Design (UI/UX)" },
  { title: "Store Development" },
  { title: "System Integration" },
  { title: "Support & Monitoring" },
  { title: "Customer Experience Management" },
  { title: "Replatforming" },
];
