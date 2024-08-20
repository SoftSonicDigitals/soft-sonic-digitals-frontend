import prismadb from "../../../lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { CLIENT_TABLE_LIMIT as limit } from "@/constants/dashboard";
import { auth } from "@clerk/nextjs/server";

// make the route dynamic
export const revalidate = 0;

export async function GET(request: NextRequest) {
  auth().protect();
  try {
    const { searchParams } = new URL(request.url);

    let pageNumber = Number(searchParams.get("page"));

    const searchQuery = searchParams.get("query") || "";

    if (pageNumber < 1 || !pageNumber) {
      pageNumber = 1;
    }

    const whereClause = searchQuery
      ? {
          OR: [
            { name: { contains: searchQuery, mode: "insensitive" } },
            { email: { contains: searchQuery, mode: "insensitive" } },
            { mobile: { contains: searchQuery, mode: "insensitive" } },
            { address_line: { contains: searchQuery, mode: "insensitive" } },
            { postcode: { contains: searchQuery, mode: "insensitive" } },
            { state: { contains: searchQuery, mode: "insensitive" } },
            { service: { contains: searchQuery, mode: "insensitive" } },
          ],
        }
      : {};

    const clients = await prismadb.client.findMany({
      where: whereClause as any,
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

    const totalClient = await prismadb.client.count({
      where: whereClause as any,
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Request successful",
        data: { clients, totalCount: totalClient, page: pageNumber },
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
