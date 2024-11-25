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
    tagColor: "#f03e3e",
    tagTextColor: "#ffc9c9",
  },
  medium: {
    tagName: "medium",
    tagColor: "#f59f00",
    tagTextColor: "#fff3bf",
  },
  low: {
    tagName: "low",
    tagColor: "#37b24d",
    tagTextColor: "#d3f9d8",
  },
};

export const STATUS_TAGS_COLORS: StatusTagsColorsType = {
  "in-progress": {
    tagName: StatusTags.IN_PROGRESS,
    tagColor: "#099268", // Light Cyan
    tagTextColor: "#c3fae8", // More Saturated Cyan
  },
  new: {
    tagName: StatusTags.NEW,
    tagColor: "#85888a", // Light Pink
    tagTextColor: "#f2f3f5", // More Saturated Pink
  },
  open: {
    tagName: StatusTags.OPEN,
    tagColor: "#66a80f", // Light Green
    tagTextColor: "#e9fac8", // More Saturated Green
  },
  reviewed: {
    tagName: StatusTags.REVIEWED,
    tagColor: "#e8590c", // Light Coral
    tagTextColor: "#ffe8cc", // More Saturated Coral
  },
  closed: {
    tagName: StatusTags.CLOSED,
    tagColor: "#1971c2", // Light Yellow
    tagTextColor: "#d0ebff", // More Saturated Yellow
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
