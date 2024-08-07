import { FormFields } from "../contact_page";

export interface ClientDetails extends FormFields {
  clientId: string;
  priority?: string;
  status?: string;
}

export type Clients = {
  id: string;
  clientID: string;
  name: string;
  email: string;
  mobile: string;
  service: string;
  priority: PriorityKey;
  status: StatusKey;
};

export type PriorityKey = "critical" | "blocker" | "urgent" | "normal";
export type StatusKey =
  | "in-progress"
  | "review"
  | "resolved"
  | "reopened"
  | "pending"
  | "verified"
  | "duplicate";

export type Tags = {
  priority: PriorityKey;
  status: StatusKey;
  id: string;
};

type TagInfo = {
  tagName: string;
  color: string;
};

export type PriorityTagColor = {
  [key in PriorityKey]: TagInfo;
};

export type StatusTagColor = {
  [key in StatusKey]: TagInfo;
};
