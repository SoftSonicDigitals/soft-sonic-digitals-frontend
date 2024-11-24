import { Resend } from "resend";
import Thankyou from "@/emails/Thankyou";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { ClientDetails, UserDetails } from "@/models/admin";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data: { leadDetails: ClientDetails; users: UserDetails[] } =
      await request.json();

    const { leadDetails, users } = data;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      // testing
      to: "softsonicdigitals@gmail.com",

      // production
      // to:email,

      subject: "Thank you for reaching to Softsonic",
      react: Thankyou(leadDetails.name),
    });

    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    // testing
    // to: "softsonicdigitals@gmail.com",

    // production
    // to: users.map((user)=> user.email),
    // subject: "Thank you for reaching to Softsonic",
    // react: Thankyou({ name }),
    // });

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
