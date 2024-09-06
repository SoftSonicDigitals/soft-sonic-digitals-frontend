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

    const lead = await prismadb.client.findUnique({
      where: {
        id: leadId,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: `Lead data for ID: ${leadId}`,
        data: lead,
      },
      { status: 200 }
    );
  } catch (err) {}
}
