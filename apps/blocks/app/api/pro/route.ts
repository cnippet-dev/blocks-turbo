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
      return NextResponse.json({ 
        isPro: false, 
        isStarter: false,
        plan: null 
      }, { status: 200 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
        pro: true,
      },
    });

    if (!user) {
      // User not found in the database
      return NextResponse.json({ 
        isPro: false, 
        isStarter: false,
        plan: null 
      }, { status: 200 });
    }

    // Get active subscription to determine plan
    const now = new Date();
    const activeSubscription = await prisma.subscription.findFirst({
      where: {
        userId: user.id,
        status: "ACTIVE",
        endDate: {
          gte: now,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const plan = activeSubscription?.plan?.toLowerCase() || null;
    // Check if user has starter tier (starter plan or any paid plan that includes starter access)
    // Starter tier includes: starter, and pro/agency/lifetime/enterprise (since pro includes starter)
    const isStarter = plan && (
      plan.includes("starter") || 
      plan.includes("pro") || 
      plan.includes("agency") || 
      plan.includes("lifetime") || 
      plan.includes("enterprise")
    );
    // Pro tier is specifically pro, agency, lifetime, or enterprise plans
    const isPro = user.pro && plan && (
      plan.includes("pro") || 
      plan.includes("agency") || 
      plan.includes("lifetime") || 
      plan.includes("enterprise")
    );

    return NextResponse.json({ 
      isPro, 
      isStarter,
      plan 
    });
  } catch (error) {
    console.error("Error fetching pro status:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
