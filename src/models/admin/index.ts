import { FormFields } from "../contact_page";
import { PriorityTags, StatusTags } from "@/constants/admin";

type ValueOf<T> = T[keyof T];

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
  priority: ValueOf<typeof PriorityTags>;
  status: ValueOf<typeof StatusTags>;
};

export type StatusTagsColorsType = {
  [key in ValueOf<typeof StatusTags>]: StatusTagColor;
};

export type PriorityTagsColorsType = {
  [key in ValueOf<typeof PriorityTags>]: PriorityTagColor;
};

type TagColorBase = {
  tagColor: string;
  tagTextColor: string;
};

type StatusTagColor = TagColorBase & {
  tagName: ValueOf<typeof StatusTags>;
};

type PriorityTagColor = TagColorBase & {
  tagName: ValueOf<typeof StatusTags>;
};
