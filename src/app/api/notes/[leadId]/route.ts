import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NOTES_LIMIT as limit } from "@/constants/dashboard";

export async function GET(
  request: NextRequest,
  { params }: { params: { leadId: string } }
) {
  auth().protect();
  try {
    const { searchParams } = new URL(request.url);
    const { leadId } = params;
    let pageNumber = Number(searchParams.get("page"));

    if (pageNumber < 1 || !pageNumber) {
      pageNumber = 1;
    }

    const notes = await prismadb.note.findMany({
      where: {
        leadId,
      },
      orderBy: {
        created_at: "desc",
      },
      skip: (pageNumber - 1) * limit,
      take: limit,
    });

    const totalNotes = await prismadb.note.count({
      where: {
        leadId,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: { notes, totalCount: totalNotes, page: pageNumber },
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

export async function POST(
  request: NextRequest,
  { params }: { params: { leadId: string } }
) {
  auth().protect();

  try {
    const { leadId } = params;
    const { note, createdBy } = await request.json();

    const addedNote = await prismadb.note.create({
      data: {
        note,
        created_by: createdBy,
        leadId,
      },
    });

    return NextResponse.json(
      {
        status: 201,
        message: "Request successful",
        data: { note: addedNote },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while adding notes.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
