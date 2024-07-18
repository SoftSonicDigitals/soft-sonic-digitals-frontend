import { FormDropDownOptionsType } from "@/models/contact_page";

export const PRIORITY_TAGS: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "critical", title: "Critical" },
  { value: "blocker", title: "Blocker" },
  { value: "urgent", title: "Urgent" },
  { value: "normal", title: "Normal" },
];

export const STATUS_TAGS: FormDropDownOptionsType = [
  { value: "", title: "-Select-" },
  { value: "in-progress", title: "In Progress" },
  { value: "review", title: "Review" },
  { value: "resolved", title: "Resolved" },
  { value: "reopened", title: "Reopened" },
  { value: "pending", title: "Pending" },
  { value: "verified", title: "Verified" },
  { value: "duplicate", title: "Duplicate" },
];
