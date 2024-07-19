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
};

export type Clients = {
  id: string;
  clientID: string;
  name: string;
  email: string;
  mobile: string;
  service: string;
};

("critical");
("blocker");
("urgent");
("normal");
export type Tags = {
  priority: "critical" | "blocker" | "urgent" | "normal";
  status:
    | "in-progress"
    | "review"
    | "resolved"
    | "reopened"
    | "pending"
    | "verified"
    | "duplicate";
  id: string;
};

export type TagColor = {
  [key: string]: {
    tagName: string;
    color: string;
  };
};
