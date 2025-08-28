"use server";

import { stackServerApp } from "@/stack";
import { syncCurrentUser } from "@/lib/sync-user";
import { revalidatePath } from "next/cache";

export async function syncUserAction() {
  try {
    const user = await stackServerApp.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const dbUser = await syncCurrentUser();

    if (!dbUser) {
      throw new Error("Failed to sync user");
    }

    revalidatePath("/dashboard");

    return {
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
    };
  } catch (error) {
    console.error("Error in syncUserAction:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
