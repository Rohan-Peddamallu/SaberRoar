"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@stackframe/stack";
import { useUserSync } from "@/hooks/useUserSync";
import { UserProfile } from "@/components/UserProfile";

export function AuthenticatedHome() {
  const { stackUser, dbUser, loading, error, syncUser } = useUserSync();
  const [showProfile, setShowProfile] = useState(false);

  // Sync user on mount if not already synced
  useEffect(() => {
    if (stackUser && !dbUser && !loading) {
      syncUser();
    }
  }, [stackUser, dbUser, loading, syncUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-red-600 text-center">
          Error: {error}
        </div>
        <button 
          onClick={syncUser}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry Sync
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                SaberRoar Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-2">
                Welcome back, {dbUser?.name || stackUser?.displayName || "User"}
                ! 👋
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your account has been successfully synced to our database.
              </p>
              {dbUser && (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Database ID
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white font-mono">
                      {dbUser.id.slice(0, 8)}...
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Stack ID
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white font-mono">
                      {dbUser.stackId.slice(0, 8)}...
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {dbUser.email}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Member Since
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      {new Date(dbUser.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {showProfile ? "Hide Profile" : "Edit Profile"}
                </button>
                <button
                  onClick={syncUser}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  🔄 Sync User Data
                </button>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          {showProfile && (
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <UserProfile />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
