import { stackServerApp } from "@/stack";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const user = await stackServerApp.getUser();

  // Define protected routes
  const protectedRoutes = ["/dashboard"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect unauthenticated users from protected routes to home
  if (isProtectedRoute && !user) {
    return Response.redirect(new URL("/", request.url));
  }

  // Optionally redirect authenticated users from auth routes
  const authRoutes = ["/signin", "/signup"];
  const isAuthRoute = authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isAuthRoute && user) {
    return Response.redirect(new URL("/dashboard", request.url));
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
