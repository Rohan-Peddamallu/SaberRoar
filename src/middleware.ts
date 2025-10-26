import { stackServerApp } from "@/stack";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const user = await stackServerApp.getUser();

  // Define protected routes
  const protectedRoutes = ["/student"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect unauthenticated users from protected routes to home
  if (isProtectedRoute && !user) {
    return Response.redirect(new URL("/", request.url));
  }

  // Teacher routes - only accessible by specific emails
  const teacherEmails = ["nabeel.deane@franklin.k12.wi.us", "rohanpeddamallu@gmail.com"];
  const isTeacherRoute = request.nextUrl.pathname.startsWith("/teacher");
  
  if (isTeacherRoute) {
    if (!user) {
      return Response.redirect(new URL("/", request.url));
    }
    
    const userEmail = user?.primaryEmail?.toLowerCase();
    if (!userEmail || !teacherEmails.includes(userEmail)) {
      return Response.redirect(new URL("/", request.url));
    }
  }

  // Student routes - accessible by rohanpeddamallu@gmail.com and @franklinsabers.org emails
  if (isProtectedRoute && user) {
    const userEmail = user?.primaryEmail?.toLowerCase();
    const isAllowedEmail = userEmail && (
      userEmail === "rohanpeddamallu@gmail.com" || 
      userEmail.endsWith("@franklinsabers.org")
    );
    
    if (!isAllowedEmail) {
      return Response.redirect(new URL("/", request.url));
    }
  }

  // Optionally redirect authenticated users from auth routes
  const authRoutes = ["/signin", "/signup"];
  const isAuthRoute = authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isAuthRoute && user) {
    return Response.redirect(new URL("/student", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - handler (StackFrame Stack handler)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|handler).*)",
  ],
};
