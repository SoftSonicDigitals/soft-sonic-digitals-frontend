import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { leadId: string } }
) {
  auth().protect();
  try {
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
        data: { notes },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while fetching notes.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
