"use server";

import prismadb from "../../lib/prismadb";

type ClientDetails = {
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

export const getClients = async () => {
  const clients = await prismadb.client.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      mobile: true,
      service: true,
    },
  });
  return clients;
};

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
