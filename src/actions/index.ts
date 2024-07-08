"use server";
import prismadb from "../../lib/prismadb";

type ClientDetails = {
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

export const addClientDetails = async ({
  name,
  email,
  mobile,
  company,
  service,
  budget,
  requirement,
  start,
  details,
}: ClientDetails) => {
  const client = await prismadb.client.create({
    data: {
      name,
      email,
      mobile,
      company,
      service,
      budget,
      requirement,
      project_start: start,
      project_details: details,
    },
  });
  return client;
};
