// app/api/user/pro/route.ts

import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@repo/db";
import { nextauthOptions } from "@/lib/nextauth-options";

export async function GET() {
  try {
    const session = await getServerSession(nextauthOptions);

    if (!session?.user?.email) {
      // User is not authenticated
      return NextResponse.json({ isPro: false }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        pro: true, // Only select the 'pro' field
      },
    });

    if (!user) {
      // User not found in the database
      return NextResponse.json({ isPro: false }, { status: 200 });
    }

    return NextResponse.json({ isPro: user.pro });
  } catch (error) {
    console.error("Error fetching pro status:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
