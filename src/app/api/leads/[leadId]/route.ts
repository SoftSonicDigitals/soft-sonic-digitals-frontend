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

export async function POST(req: Request) {
  try {
    // Create a new note in the database
    const newNote = await prismadb.note.create({
      data: {
        created_by: "Shovit Rauniyar",
        note: "12223344445556, Test 123",
        clientID: "66cb14e2452c346d12947cbd",
      },
    });

    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
