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

export const PriorityTags = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

export const LeadDetails = {
  LEAD_OWNER: "Lead owner",
  COMPANY: "Company",
  SERVICE: "Service",
  BUDGET: "Budget",
  PROJECT_REQUIREMENT: "Project requirements",
  START_TIME: "Estimated start time",
  PROJECT_DETAILS: "Project details",
};

export const LEAD_SORUCE_TXT = "Lead Source";

export const LEAD_CAPTURED_DATE_TXT = "Lead Captured Date";

export const CaptureDateFormats = {
  date: "d LLL yyyy",
  time: "hh:mm aa",
};
