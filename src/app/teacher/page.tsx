import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import Teacher from '@/components/Teacher';

export default async function TeacherPage() {
  const user = await stackServerApp.getUser();

  // Check if user is authenticated
  if (!user) {
    redirect("/");
  }

  // Check if user has authorized teacher email
  const teacherEmails = ["nabeel.deane@franklin.k12.wi.us", "rohanpeddamallu@gmail.com"];
  const userEmail = user?.primaryEmail?.toLowerCase();
  
  if (!userEmail || !teacherEmails.includes(userEmail)) {
    redirect("/");
  }

  return <Teacher />;
}