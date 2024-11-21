"use client";
import { LeadDetails } from "@/models/admin";
import { createContext, useState, ReactNode, useContext } from "react";

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
