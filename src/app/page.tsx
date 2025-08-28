import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";

export default async function Home() {
  const user = await stackServerApp.getUser();

  // Redirect authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  // Redirect unauthenticated users to sign-in
  redirect("/handler/signin");
}
