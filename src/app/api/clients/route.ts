import prismadb from "../../../lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

// make the route dynamic
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const pageNumber = 1;
    const limit = 5;

    const clients = await prismadb.client.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        address_line: true,
        postcode: true,
        state: true,
        service: true,
        priority: true,
        status: true,
      },
      skip: (pageNumber - 1) * limit,
      take: limit,
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: clients,
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
