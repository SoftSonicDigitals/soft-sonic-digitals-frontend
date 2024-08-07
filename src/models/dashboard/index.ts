export type ClientDetails = {
  clientID: string;
  name: string;
  email: string;
  mobile: string;
  company?: string;
  service: string;
  budget: string;
  requirement: string;
  start: string;
  details?: string;
  priority: string;
  status: string;
  address?: string;
};

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
