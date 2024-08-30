import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";

export const FilterCategoryTypes = {
  MONTH: "month",
  TAGS: "tags",
  SERVICES: "services",
  STATE: "state",
};

export const ProfileInfoIcons = {
  MAIL: IoMailOutline,
  PHONE: BsTelephone,
  ADDRESS: GrLocation,
};

export const StatusTags = {
  NEW: "new",
  OPEN: "open",
  IN_PROGRESS: "in-progress",
  REVIEWED: "reviewed",
  CLOSED: "closed",
};

export const LEAD_SORUCE_TXT = "Lead Source";

export const LEAD_CAPTURED_DATE_TXT = "Lead Captured Date";

export const LeadCaptureDateFormats = {
  date: "d LLL yyyy",
  time: "hh:mm aa",
};
