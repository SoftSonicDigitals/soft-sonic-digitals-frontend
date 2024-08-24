import { HiOutlineCalendar } from "react-icons/hi2";
import { GoTag } from "react-icons/go";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { LuUserCog2 } from "react-icons/lu";

export const filterMenuOptions = [
  {
    name: "date",
    icon: HiOutlineCalendar,
  },
  {
    name: "tags",
    icon: GoTag,
  },
  {
    name: "state",
    icon: HiOutlineGlobeAsiaAustralia,
  },
  {
    name: "service",
    icon: LuUserCog2,
  },
];

export const filterDate = [
  { id: "1", label: "January" },
  { id: "2", label: "February" },
  { id: "3", label: "March" },
  { id: "4", label: "April" },
  { id: "5", label: "May" },
  { id: "6", label: "June" },
  { id: "7", label: "July" },
  { id: "8", label: "August" },
  { id: "9", label: "September" },
  { id: "10", label: "October" },
  { id: "11", label: "November" },
  { id: "12", label: "December" },
];

export const filterTags = [
  { id: "blocker", label: "Blocker" },
  { id: "critical", label: "Critical" },
  { id: "duplicate", label: "Duplicate" },
  { id: "in-progress", label: "In-Progress" },
  { id: "normal", label: "Normal" },
  { id: "pending", label: "Pending" },
  { id: "reopened", label: "Reopened" },
  { id: "resolved", label: "Resolved" },
  { id: "review", label: "Review" },
  { id: "urgent", label: "Urgent" },
  { id: "verified", label: "Verified" },
];

export const filterState = [
  { id: "NSW", label: "New South Wales" },
  { id: "VIC", label: "Victoria" },
  { id: "QLD", label: "Queensland" },
  { id: "SA", label: "South Australia" },
  { id: "WA", label: "Western Australia" },
  { id: "TAS", label: "Tasmania" },
  { id: "ACT", label: "Australian Capital Territory" },
  { id: "NT", label: "Northern Territory" },
];

export const filterService = [
  { id: "Ecommerce Consultation", label: "Ecommerce Consultation" },
  { id: "Ecommerce Development", label: "Ecommerce Development" },
  { id: "Ecommerce Replatforming", label: "Ecommerce Replatforming" },
  {
    id: "Mobile Application Development",
    label: "Mobile App Development",
  },
  { id: "Web Application Development", label: "Web App Development" },
  { id: "Digital Marketing", label: "Digital Marketing" },
  { id: "UI & UX design", label: "UI & UX design" },
];
