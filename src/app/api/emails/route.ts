import { Resend } from "resend";
import Thankyou from "@/emails/Thankyou";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  auth().protect();
  try {
    const { name, email } = await request.json();
    console.log(name, email);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "softsonicdigitals@gmail.com",
      subject: "Thank you for reaching to Softsonic",
      react: Thankyou({ name }),
    });

    return NextResponse.json(
      {
        status: 201,
        message: "Request successful",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
