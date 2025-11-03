import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../../../../stack";
import { syncCurrentUser } from "../../../../lib/sync-user";
import { prisma } from "../../../../lib/db";

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const stackUser = await stackServerApp.getUser();

    if (!stackUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Ensure user exists in database
    await syncCurrentUser();

    // Get user from database
    const dbUser = await prisma.user.findUnique({
      where: { stackId: stackUser.id },
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { equipment, description } = body;

    // Validate input
    if (!equipment || typeof equipment !== "string") {
      return NextResponse.json(
        { error: "Equipment is required" },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string") {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    // Create equipment request
    const equipmentRequest = await prisma.equipmentRequest.create({
      data: {
        userId: dbUser.id,
        equipment,
        description,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      request: equipmentRequest,
    });
  } catch (error) {
    console.error("Error creating equipment request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify user is authenticated
    const stackUser = await stackServerApp.getUser();

    if (!stackUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Support filtering to current user's requests with ?mine=1
    const url = new URL(request.url);
    const mine = url.searchParams.get("mine");

    let whereClause = undefined as { userId?: string } | undefined;

    if (mine) {
      // Look up DB user ID from Stack ID
      const dbUser = await prisma.user.findUnique({ where: { stackId: stackUser.id } });
      if (!dbUser) {
        return NextResponse.json(
          { error: "User not found in database" },
          { status: 404 }
        );
      }
      whereClause = { userId: dbUser.id };
    }

    // Get equipment requests (optionally filtered by current user)
    const requests = await prisma.equipmentRequest.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        requestDate: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      requests,
    });
  } catch (error) {
    console.error("Error fetching equipment requests:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
