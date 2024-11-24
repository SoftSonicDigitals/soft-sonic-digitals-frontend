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

export type LeadDetails = {
  id: string; // Corresponds to @id with @db.ObjectId
  client_id: string;
  name: string;
  email: string;
  mobile: string;
  company?: string; // Optional field
  address_line?: string; // Optional field
  postcode?: string; // Optional field
  state?: string; // Optional field
  service: string;
  budget: string;
  requirement: string;
  estimated_start_time: string;
  project_details?: string; // Optional field
  priority: ValueOf<typeof PriorityTags>;
  status: ValueOf<typeof StatusTags>;
  date: Date; // DateTime field in Prisma
  lead_owner?: string; // Optional field
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

export type UserDetails = {
  firstName: string | null;
  lastName: string | null;
  email: string;
};
