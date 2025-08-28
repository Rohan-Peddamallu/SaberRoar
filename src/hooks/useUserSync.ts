"use client";

import { useState, useEffect } from "react";
import { useUser } from "@stackframe/stack";

export interface DatabaseUser {
  id: string;
  stackId: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
  profile?: {
    id: string;
    userId: string;
    bio: string | null;
    location: string | null;
    website: string | null;
  } | null;
}

export function useUserSync() {
  const stackUser = useUser();
  const [dbUser, setDbUser] = useState<DatabaseUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const syncUser = async () => {
    if (!stackUser) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/sync", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to sync user");
      }

      const data = await response.json();
      setDbUser(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData: {
    bio?: string;
    location?: string;
    website?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();

      // Update the user state with new profile
      if (dbUser) {
        setDbUser({
          ...dbUser,
          profile: data.profile,
        });
      }

      return data.profile;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Auto-sync user when StackFrame user is available
  useEffect(() => {
    if (stackUser && !dbUser) {
      syncUser();
    }
  }, [stackUser]);

  return {
    stackUser,
    dbUser,
    loading,
    error,
    syncUser,
    updateProfile,
  };
}
