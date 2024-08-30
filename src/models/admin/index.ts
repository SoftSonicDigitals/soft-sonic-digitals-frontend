import { ValueOf } from "next/dist/shared/lib/constants";
import { FormFields } from "../contact_page";
import { StatusTags } from "@/constants/admin";

export interface ClientDetails extends FormFields {
  clientId: string;
  priority?: string;
  status?: string;
}

export type Clients = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  service: string;
  address_line: string;
  postcode: string;
  state: string;
  priority: PriorityKey;
  status: ValueOf<typeof StatusTags>;
};

export type PriorityKey = "critical" | "blocker" | "urgent" | "normal";

export type StatusTagsColorsType = {
  [key in ValueOf<typeof StatusTags>]: StatusTagColor;
};

type StatusTagColor = {
  tagName: ValueOf<typeof StatusTags>;
  tagColor: string;
  tagTextColor: string;
};
