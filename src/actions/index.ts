"use server";
import { ObjectId } from "mongodb";
import { ClientDetails } from "@/models/dashboard";
import prismadb from "../lib/prismadb";
import { revalidatePath } from "next/cache";

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
  priority,
  status,
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
      priority,
      status,
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
  const totalClientCount = await prismadb.client.count();
  return { clients, totalClientCount };
};

export const searchClients = async (
  pageNumber: number,
  paginationTableLimit: number,
  searchQuery: string
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
    where: {
      OR: [
        {
          name: {
            contains: searchQuery,
          },
        },
        {
          client_id: { contains: searchQuery },
        },
      ],
    },
    skip: (pageNumber - 1) * paginationTableLimit,
    take: paginationTableLimit,
  });

  const totalClientCount = await prismadb.client.count({
    where: {
      OR: [
        {
          name: {
            contains: searchQuery,
          },
        },
        {
          client_id: { contains: searchQuery },
        },
      ],
    },
  });
  return { clients, totalClientCount };
};

export const getClientInfo = async (id: string) => {
  const isValid = ObjectId.isValid(id);
  if (isValid) {
    const clientInfo = await prismadb.client.findUnique({ where: { id } });
    return clientInfo;
  } else {
    return null;
  }
};

export const addClientNote = async (
  note: string,
  email: string,
  clientId: string
) => {
  return await prismadb.note.create({
    data: {
      created_by: email,
      note,
      clientID: clientId,
    },
  });
};

export const getClientNotes = async (clientId: string | undefined) => {
  if (!clientId) {
    return null;
  }
  const notes = await prismadb.note.findMany({
    where: {
      clientID: clientId,
    },
  });
  return notes;
};

export const updateTags = async (
  priority: string,
  status: string,
  id: string
) => {
  const result = await prismadb.client.update({
    data: {
      priority,
      status,
    },
    where: {
      id,
    },
    select: {
      priority: true,
      status: true,
    },
  });
  revalidatePath(`/admin/client/${id}`);
  return result;
};
