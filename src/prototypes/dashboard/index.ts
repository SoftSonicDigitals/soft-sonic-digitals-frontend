import { FormDropDownOptionsType } from "@/models/contact_page";
import { PriorityTagColor, StatusTagColor } from "@/models/dashboard";
import { FaChartSimple } from "react-icons/fa6";
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

export const PRIORITY_TAGS_COLORS: PriorityTagColor = {
  critical: {
    tagName: "critical",
    color: "#D32F2F", // Matte Red
  },
  blocker: {
    tagName: "blocker",
    color: "#7B1FA2", // Matte Purple
  },
  urgent: {
    tagName: "urgent",
    color: "#F57C00", // Matte Orange
  },
  normal: {
    tagName: "normal",
    color: "#1976D2", // Matte Blue
  },
};

export const STATUS_TAGS_COLORS: StatusTagColor = {
  "in-progress": {
    tagName: "in-progress",
    color: "#0288D1", // Matte Light Blue
  },
  review: {
    tagName: "review",
    color: "#7E57C2", // Matte Deep Purple
  },
  resolved: {
    tagName: "resolved",
    color: "#388E3C", // Matte Green
  },
  reopened: {
    tagName: "reopened",
    color: "#FBC02D", // Matte Yellow
  },
  pending: {
    tagName: "pending",
    color: "#00796B", // Matte Teal
  },
  verified: {
    tagName: "verified",
    color: "#0288D1", // Matte Light Blue
  },
  duplicate: {
    tagName: "duplicate",
    color: "#616161", // Matte Gray
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
    title: "Customers",
    icon: FiUser,
    link: "/",
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
