import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import { syncCurrentUser } from "@/lib/sync-user";
import { AuthenticatedHome } from "@/components/AuthenticatedHome";

export default async function StudentPage() {
  const user = await stackServerApp.getUser();

  if (!user) {
    redirect("/");
  }

  // Check if user has authorized email for student dashboard
  const userEmail = user?.primaryEmail?.toLowerCase();
  const isAllowedEmail = userEmail && (
    userEmail === "rohanpeddamallu@gmail.com" || 
    userEmail.endsWith("@franklinsabers.org")
  );

  if (!isAllowedEmail) {
    redirect("/");
  }

  // Automatically sync user to database on dashboard access
  await syncCurrentUser();

  return <AuthenticatedHome />;
}
