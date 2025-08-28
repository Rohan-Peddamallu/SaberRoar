import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../../../../stack";
import {
  getUserByStackId,
  updateUserProfile,
} from "../../../../lib/user-service";
import { syncCurrentUser } from "../../../../lib/sync-user";

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

    // Ensure user exists in database
    await syncCurrentUser();

    // Get user from database
    const dbUser = await getUserByStackId(stackUser.id);

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found in database" },
        { status: 404 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { bio, location, website } = body;

    // Validate input
    if (bio !== undefined && typeof bio !== "string") {
      return NextResponse.json(
        { error: "Bio must be a string" },
        { status: 400 }
      );
    }

    if (location !== undefined && typeof location !== "string") {
      return NextResponse.json(
        { error: "Location must be a string" },
        { status: 400 }
      );
    }

    if (website !== undefined && typeof website !== "string") {
      return NextResponse.json(
        { error: "Website must be a string" },
        { status: 400 }
      );
    }

    // Update profile
    const updatedProfile = await updateUserProfile(dbUser.id, {
      bio,
      location,
      website,
    });

    return NextResponse.json({
      success: true,
      profile: updatedProfile,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
