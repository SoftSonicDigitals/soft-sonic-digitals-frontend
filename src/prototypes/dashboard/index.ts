import { FiUser } from "react-icons/fi";
import { LuClipboard } from "react-icons/lu";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { PiHeadphonesBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { StatusTags } from "@/constants/admin";
import { PriorityTagsColorsType, StatusTagsColorsType } from "@/models/admin";

export const PRIORITY_TAGS_COLORS: PriorityTagsColorsType = {
  high: {
    tagName: "high",
    tagColor: "#66c255", // Light Red
    tagTextColor: "#C62828", // More Saturated Red
  },
  medium: {
    tagName: "medium",
    tagColor: "#f59f00", // Light Purple
    tagTextColor: "#6A1B9A", // More Saturated Purple
  },
  low: {
    tagName: "low",
    tagColor: "#f03e3e", // Light Orange
    tagTextColor: "#F57C00", // More Saturated Orange
  },
};

export const STATUS_TAGS_COLORS: StatusTagsColorsType = {
  "in-progress": {
    tagName: StatusTags.IN_PROGRESS,
    tagColor: "#80deea", // Light Cyan
    tagTextColor: "#00acc1", // More Saturated Cyan
  },
  new: {
    tagName: StatusTags.NEW,
    tagColor: "#e1bee7", // Light Pink
    tagTextColor: "#ab47bc", // More Saturated Pink
  },
  open: {
    tagName: StatusTags.OPEN,
    tagColor: "#c5e1a5", // Light Green
    tagTextColor: "#7cb342", // More Saturated Green
  },
  reviewed: {
    tagName: StatusTags.REVIEWED,
    tagColor: "#ffab91", // Light Coral
    tagTextColor: "#ff5722", // More Saturated Coral
  },
  closed: {
    tagName: StatusTags.CLOSED,
    tagColor: "#ffecb3", // Light Yellow
    tagTextColor: "#fbc02d", // More Saturated Yellow
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
    title: "Leads",
    icon: FiUser,
    link: "/leads",
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
