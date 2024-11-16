import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(
  request: NextRequest,
  { params }: { params: { leadId: string } }
) {
  auth().protect();
  try {
    const { leadId } = params;

    const leadDetails = await prismadb.client.findUnique({
      where: {
        id: leadId,
      },
    });

    const notes = await prismadb.note.findMany({
      where: {
        clientID: leadId,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: { lead: leadDetails, notes },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while fetching clients.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { leadId: string } }
) {
  auth().protect();
  try {
    console.log("here api");
    const { leadId } = params;

    const notes = await prismadb.note.findMany({
      where: {
        clientID: leadId,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while fetching clients.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
