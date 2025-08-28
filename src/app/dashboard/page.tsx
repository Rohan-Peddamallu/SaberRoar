import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import { syncCurrentUser } from "@/lib/sync-user";
import { AuthenticatedHome } from "@/components/AuthenticatedHome";

export default async function DashboardPage() {
  const user = await stackServerApp.getUser();

  if (!user) {
    redirect("/");
  }

  // Automatically sync user to database on dashboard access
  await syncCurrentUser();

  return <AuthenticatedHome />;
}
