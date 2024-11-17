import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  auth().protect();
  try {
    const { data } = await clerkClient().users.getUserList();

    const users = data.map((user) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0].emailAddress, //only getting the 1st email
    }));

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
};
