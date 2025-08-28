import { stackServerApp } from "../stack";
import { upsertUserFromStack } from "./user-service";
import type { UserWithProfile } from "./user-service";

/**
 * Syncs the current authenticated user from StackFrame Stack to the database
 * Call this function in your app whenever you need to ensure the user exists in your database
 */
export async function syncCurrentUser(): Promise<UserWithProfile | null> {
  try {
    const user = await stackServerApp.getUser();

    if (!user) {
      return null;
    }

    // Sync user to database
    const dbUser = await upsertUserFromStack(user);
    return dbUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    return null;
  }
}

/**
 * Syncs a specific user by their Stack ID to the database
 * Note: This function is currently limited to syncing the current user only
 * as StackFrame Stack's getUser() method doesn't support getting other users by ID in the server context
 */
export async function syncUserByStackId(
  stackId: string
): Promise<UserWithProfile | null> {
  try {
    // For now, we can only sync the current user
    // StackFrame Stack's server API doesn't allow getting other users by ID directly
    const currentUser = await stackServerApp.getUser();

    if (!currentUser || currentUser.id !== stackId) {
      return null;
    }

    // Sync user to database
    const dbUser = await upsertUserFromStack(currentUser);
    return dbUser;
  } catch (error) {
    console.error("Error syncing user by Stack ID:", error);
    return null;
  }
}
