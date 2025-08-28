"use client";

import { SignIn } from "@stackframe/stack";
import Image from "next/image";

export function UnauthenticatedHome() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="SaberRoar logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Welcome to SaberRoar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sign in to access your personalized dashboard and manage your
            profile.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <div className="w-full sm:w-auto">
            <SignIn />
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            New user? Sign up is included!
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">🔐 Secure Authentication</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your data is protected with enterprise-grade security.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">👤 User Profiles</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Customize your profile with bio, location, and website.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">📊 Dashboard</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access your personalized dashboard after signing in.
            </p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <span>Powered by StackFrame Stack & Prisma</span>
      </footer>
    </div>
  );
}
