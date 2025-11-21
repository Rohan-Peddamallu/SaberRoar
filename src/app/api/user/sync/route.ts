import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../../../../stack";
import { syncCurrentUser } from "../../../../lib/sync-user";

export async function POST(_request: NextRequest) {
  try {
    // Verify user is authenticated
    const user = await stackServerApp.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Sync user to database
    const dbUser = await syncCurrentUser();

    if (!dbUser) {
      return NextResponse.json(
        { error: "Failed to sync user" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: dbUser.id,
        stackId: dbUser.stackId,
        email: dbUser.email,
        name: dbUser.name,
        avatarUrl: dbUser.avatarUrl,
        profile: dbUser.profile,
        createdAt: dbUser.createdAt,
        updatedAt: dbUser.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error in user sync API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(_request: NextRequest) {
  try {
    // Verify user is authenticated
    const user = await stackServerApp.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get user from database (will auto-sync if not exists)
    const dbUser = await syncCurrentUser();

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        id: dbUser.id,
        stackId: dbUser.stackId,
        email: dbUser.email,
        name: dbUser.name,
        avatarUrl: dbUser.avatarUrl,
        profile: dbUser.profile,
        createdAt: dbUser.createdAt,
        updatedAt: dbUser.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error in user get API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
