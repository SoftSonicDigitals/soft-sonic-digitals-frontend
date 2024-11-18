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

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: { lead: leadDetails },
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
    const { leadId } = params;

    const data = await request.json();

    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    const lead = await prismadb.client.update({
      data: updateData,
      where: {
        id: leadId,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: { lead },
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
