"use server";
import { ClientDetails } from "@/models/admin";
import prismadb from "../lib/prismadb";
import { PriorityTags, StatusTags } from "@/constants/admin";

// add client
export const addClient = async ({
  clientId,
  name,
  email,
  mobile,
  company,
  address_line,
  postcode,
  state,
  service,
  budget,
  requirement,
  estimated_start_time,
  project_details,
  priority,
  status,
}: ClientDetails) => {
  try {
    const client = await prismadb.client.create({
      data: {
        client_id: clientId,
        name,
        email,
        mobile,
        company,
        address_line,
        postcode,
        state,
        service,
        budget,
        requirement,
        estimated_start_time,
        project_details,
        priority: PriorityTags.LOW,
        status: StatusTags.NEW,
        lead_owner: "",
      },
    });

    return {
      status: "success",
      data: { client },
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        status: "fail",
        message: "Submission Error: " + err.message,
      };
    } else {
      return {
        status: "fail",
        message: "Submission Error!",
      };
    }
  }
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
