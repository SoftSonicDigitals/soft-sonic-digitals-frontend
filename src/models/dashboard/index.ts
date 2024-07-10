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
};

export type Clients = {
  id: string;
  clientID: string;
  name: string;
  email: string;
  mobile: string;
  service: string;
};
