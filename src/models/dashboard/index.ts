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

export type Tags = {
  priority: string;
  status: string;
  id: string;
};
