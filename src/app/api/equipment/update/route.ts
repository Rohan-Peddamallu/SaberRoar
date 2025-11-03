import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../../../../stack";
import { prisma } from "../../../../lib/db";

export async function PUT(request: NextRequest) {
  try {
    // Verify user is authenticated
    const stackUser = await stackServerApp.getUser();

    if (!stackUser) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { requestId, status, notes, dueDate } = body;

    // Validate input
    if (!requestId || typeof requestId !== "string") {
      return NextResponse.json(
        { error: "Request ID is required" },
        { status: 400 }
      );
    }

    if (!status || typeof status !== "string") {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }

    if (!["pending", "approved", "denied", "returned"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    // Update equipment request
    const updatedRequest = await prisma.equipmentRequest.update({
      where: { id: requestId },
      data: {
        status,
        notes: notes || null,
        dueDate: dueDate ? new Date(dueDate) : null,
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
      request: updatedRequest,
    });
  } catch (error) {
    console.error("Error updating equipment request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
