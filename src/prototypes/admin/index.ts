import { GoHome } from "react-icons/go";
import { IoBarChartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TiFlashOutline } from "react-icons/ti";
import { FiBell } from "react-icons/fi";
export const ADMIN_NAVBAR = [
  {
    title: "Home",
    link: "/",
    icon: GoHome,
  },
  {
    title: "Charts",
    link: "/",
    icon: IoBarChartOutline,
  },
  {
    title: "User",
    link: "/",
    icon: LuUser,
  },
  {
    title: "Calender",
    link: "/",
    icon: MdOutlineCalendarMonth,
  },
  {
    title: "Flash",
    link: "/",
    icon: TiFlashOutline,
  },
  {
    title: "Notificaiton",
    link: "/",
    icon: FiBell,
  },
];
