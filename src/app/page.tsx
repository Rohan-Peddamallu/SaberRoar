import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import { LandingPage } from "@/components/LandingPage";

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (user) {
    const userEmail = user?.primaryEmail?.toLowerCase();
    
    // Check if user should be redirected to teacher or student dashboard
    const teacherEmails = ["nabeel.deane@franklin.k12.wi.us", "rohanpeddamallu@gmail.com"];
    const isTeacherEmail = userEmail && teacherEmails.includes(userEmail);
    const isStudentEmail = userEmail && (
      userEmail === "rohanpeddamallu@gmail.com" || 
      userEmail.endsWith("@franklinsabers.org")
    );
    
    // Redirect to appropriate dashboard or teacher page
    if (isTeacherEmail && userEmail === "nabeel.deane@franklin.k12.wi.us") {
      redirect("/teacher");
    } else if (isStudentEmail) {
      redirect("/student");
    } else if (isTeacherEmail) {
      // rohanpeddamallu@gmail.com can access both, default to student dashboard
      redirect("/student");
    }
    // If user doesn't match any allowed email, stay on landing page
  }

  return <LandingPage />;
}