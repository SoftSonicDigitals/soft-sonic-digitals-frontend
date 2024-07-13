"use server";

import { ClientDetails } from "@/models/dashboard";
import prismadb from "../lib/prismadb";

// add client
export const addClientDetails = async ({
  clientID,
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
      client_id: clientID,
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

// generate a custom client id cause prisma doesnt support custom id
export async function getNextClientID() {
  // Fetch the current counter
  let sequence = await prismadb.sequence.findFirst();

  if (!sequence) {
    // If no counter exists, create one with the initial value
    sequence = await prismadb.sequence.create({
      data: { counter: 1 },
    });
  } else {
    // Increment the counter
    sequence = await prismadb.sequence.update({
      where: { id: sequence.id },
      data: { counter: sequence.counter + 1 },
    });
  }
  return `SC${sequence.counter.toString().padStart(3, "0")}`;
}

// get array of the clients
export const getClients = async (
  pageNumber: number,
  paginationTableLimit: number
) => {
  const clients = await prismadb.client.findMany({
    select: {
      client_id: true,
      id: true,
      name: true,
      email: true,
      mobile: true,
      service: true,
    },
    skip: (pageNumber - 1) * paginationTableLimit,
    take: paginationTableLimit,
  });

  return clients;
};

export const getClientCount = async () => {
  return await prismadb.client.count();
};

export const getClientInfo = async (id: string) => {
  return await prismadb.client.findUnique({ where: { id } });
};
