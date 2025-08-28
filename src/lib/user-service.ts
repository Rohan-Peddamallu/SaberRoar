import { prisma } from "./db";
import type { User, UserProfile } from "@prisma/client";
import type { ServerUser } from "@stackframe/stack";

export type UserWithProfile = User & {
  profile?: UserProfile | null;
};

/**
 * Creates or updates a user in the database from StackFrame Stack user data
 */
export async function upsertUserFromStack(
  stackUser: ServerUser
): Promise<UserWithProfile> {
  const userData = {
    stackId: stackUser.id,
    email: stackUser.primaryEmail ?? "",
    name: stackUser.displayName,
    avatarUrl: stackUser.profileImageUrl,
  };

  const user = await prisma.user.upsert({
    where: { stackId: stackUser.id },
    update: userData,
    create: userData,
    include: {
      profile: true,
    },
  });

  return user;
}

/**
 * Gets a user by their StackFrame Stack ID
 */
export async function getUserByStackId(
  stackId: string
): Promise<UserWithProfile | null> {
  return await prisma.user.findUnique({
    where: { stackId },
    include: {
      profile: true,
    },
  });
}

/**
 * Gets a user by their email
 */
export async function getUserByEmail(
  email: string
): Promise<UserWithProfile | null> {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      profile: true,
    },
  });
}

/**
 * Gets a user by their database ID
 */
export async function getUserById(id: string): Promise<UserWithProfile | null> {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
    },
  });
}

/**
 * Updates a user's profile information
 */
export async function updateUserProfile(
  userId: string,
  profileData: {
    bio?: string;
    location?: string;
    website?: string;
  }
): Promise<UserProfile> {
  return await prisma.userProfile.upsert({
    where: { userId },
    update: profileData,
    create: {
      userId,
      ...profileData,
    },
  });
}

/**
 * Deletes a user and their profile
 */
export async function deleteUser(stackId: string): Promise<void> {
  await prisma.user.delete({
    where: { stackId },
  });
}

/**
 * Gets all users (for admin purposes)
 */
export async function getAllUsers(): Promise<UserWithProfile[]> {
  return await prisma.user.findMany({
    include: {
      profile: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
