import prismadb from "../../../lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return Response.json({ message: "Test" });
  } catch (error) {}
}
