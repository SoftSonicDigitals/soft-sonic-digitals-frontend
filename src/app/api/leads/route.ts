import {
  FilterCategoryTypes,
  PriorityTags,
  StatusTags,
} from "@/constants/admin";
import { CLIENT_TABLE_LIMIT as limit } from "@/constants/dashboard";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Prisma } from "@prisma/client";
import { ClientDetails } from "@/models/admin";

// make the route dynamic
export const revalidate = 0;

export async function GET(request: NextRequest) {
  auth().protect();
  try {
    const { searchParams } = new URL(request.url);

    // date param
    const monthParam = searchParams.get(FilterCategoryTypes.MONTH);
    const month = monthParam ? Number(monthParam[0]) : null;

    //tags param
    const tagsParam = searchParams.get(FilterCategoryTypes.TAGS);
    const tagsArray = tagsParam ? tagsParam.split(",") : null;

    //state param
    const stateParam = searchParams.get(FilterCategoryTypes.STATE);
    const stateArray = stateParam ? stateParam.split(",") : null;

    //service param
    const serviceParam = searchParams.get(FilterCategoryTypes.SERVICES);
    const serviceArray = serviceParam ? serviceParam.split(",") : null;

    const searchQuery = searchParams.get("query") || null;

    const searchFilter = searchQuery
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

    const dateFilter = month
      ? {
          date: {
            gte: new Date(new Date().getFullYear(), month - 1, 1), // Start of the month
            lt: new Date(new Date().getFullYear(), month, 1), // Start of the next month
          },
        }
      : {};

    const tagsFilter = tagsArray
      ? {
          OR: [
            ...tagsArray.map((tag) => ({
              priority: { contains: tag, mode: "insensitive" },
            })),
            ...tagsArray.map((tag) => ({
              status: { contains: tag, mode: "insensitive" },
            })),
          ],
        }
      : {};

    const stateFilter = stateArray
      ? {
          OR: [
            ...stateArray.map((state) => ({
              state: { contains: state, mode: "insensitive" },
            })),
          ],
        }
      : {};

    const serviceFilter = serviceArray
      ? {
          OR: [
            ...serviceArray.map((service) => ({
              service: { contains: service, mode: "insensitive" },
            })),
          ],
        }
      : {};

    const whereClause = {
      AND: [dateFilter, searchFilter, tagsFilter, stateFilter, serviceFilter],
    };

    let pageNumber = Number(searchParams.get("page"));

    if (pageNumber < 1 || !pageNumber) {
      pageNumber = 1;
    }

    const clients = await prismadb.client.findMany({
      where: whereClause as Prisma.ClientWhereInput | undefined,
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
      where: whereClause as Prisma.ClientWhereInput | undefined,
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

export async function POST(request: NextRequest) {
  try {
    const data: ClientDetails = await request.json();
    const {
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
    } = data;

    const leadDetails = await prismadb.client.create({
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

    return NextResponse.json(
      {
        status: 201,
        message: "Request successful",
        data: { lead: leadDetails },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred during submission.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
