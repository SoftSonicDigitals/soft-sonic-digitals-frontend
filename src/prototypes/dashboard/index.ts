import { FormDropDownOptionsType } from "@/models/contact_page";
import { FiUser } from "react-icons/fi";
import { LuClipboard } from "react-icons/lu";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { PiHeadphonesBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

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

export const PRIORITY_TAGS_COLORS = {
  critical: {
    tagName: "critical",
    tagColor: "#F28B82", // Light Red
    tagTextColor: "#C62828", // More Saturated Red
  },
  blocker: {
    tagName: "blocker",
    tagColor: "#CE93D8", // Light Purple
    tagTextColor: "#6A1B9A", // More Saturated Purple
  },
  urgent: {
    tagName: "urgent",
    tagColor: "#FFCC80", // Light Orange
    tagTextColor: "#F57C00", // More Saturated Orange
  },
  normal: {
    tagName: "normal",
    tagColor: "#c3c7f8", // Light Blue
    tagTextColor: "#4e5dff", // More Saturated Blue
  },
};

export const STATUS_TAGS_COLORS = {
  "in-progress": {
    tagName: "in-progress",
    tagColor: "#80deea", // Light Cyan
    tagTextColor: "#00acc1", // More Saturated Cyan
  },
  review: {
    tagName: "review",
    tagColor: "#e1bee7", // Light Pink
    tagTextColor: "#ab47bc", // More Saturated Pink
  },
  resolved: {
    tagName: "resolved",
    tagColor: "#c5e1a5", // Light Green
    tagTextColor: "#7cb342", // More Saturated Green
  },
  reopened: {
    tagName: "reopened",
    tagColor: "#ffab91", // Light Coral
    tagTextColor: "#ff5722", // More Saturated Coral
  },
  pending: {
    tagName: "pending",
    tagColor: "#ffecb3", // Light Yellow
    tagTextColor: "#fbc02d", // More Saturated Yellow
  },
  verified: {
    tagName: "verified",
    tagColor: "#b3e5fc", // Light Blue
    tagTextColor: "#03a9f4", // More Saturated Blue
  },
  duplicate: {
    tagName: "duplicate",
    tagColor: "#e0e0e0", // Light Gray
    tagTextColor: "#b0bec5", // More Saturated Gray
  },
};

export const DASHBOARD_NAVLINKS = [
  {
    title: "Overview",
    icon: HiMiniSquares2X2,
    link: "/dashboard",
  },

  {
    title: "Growth",
    icon: GoGraph,
    link: "/",
  },
  {
    title: "Clients",
    icon: FiUser,
    link: "/clients",
  },
  {
    title: "Reports",
    icon: LuClipboard,
    link: "/",
  },
  {
    title: "Support",
    icon: PiHeadphonesBold,
    link: "/",
  },
  {
    title: "Settings",
    icon: IoSettingsOutline,
    link: "/",
  },
];
