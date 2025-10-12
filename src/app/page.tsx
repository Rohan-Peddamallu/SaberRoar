import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import { LandingPage } from "@/components/LandingPage";

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return <LandingPage />;
}