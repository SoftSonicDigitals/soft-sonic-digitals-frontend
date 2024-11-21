"use client";
import { createContext, useState, ReactNode, useContext } from "react";

type LeadDetails = {
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
  priority: string;
  status: string;
  date: Date; // DateTime field in Prisma
  lead_owner?: string; // Optional field
};

type LeadDetailsContextProps = {
  leadDetails: LeadDetails;
  setLeadDetails: React.Dispatch<React.SetStateAction<LeadDetails>>;
};

const defaultLeadDetails = {
  id: "",
  client_id: "",
  name: "",
  email: "",
  mobile: "",
  postcode: "",
  address_line: "",
  state: "",
  budget: "",
  service: "",
  company: "",
  lead_owner: "",
  status: "new",
  date: new Date(),
  estimated_start_time: "",
  requirement: "",
  project_details: "",
  priority: "normal",
};

const LeadDetailsContext = createContext<LeadDetailsContextProps>({
  leadDetails: defaultLeadDetails,
  setLeadDetails: () => {},
});

export const LeadDetailsWrapper = ({ children }: { children: ReactNode }) => {
  const [leadDetails, setLeadDetails] =
    useState<LeadDetails>(defaultLeadDetails);

  return (
    <LeadDetailsContext.Provider value={{ leadDetails, setLeadDetails }}>
      {children}
    </LeadDetailsContext.Provider>
  );
};

export const useLeadDetailsContext = () => useContext(LeadDetailsContext);

export default LeadDetailsContext;
