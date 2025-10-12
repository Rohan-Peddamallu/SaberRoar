import { redirect } from "next/navigation";
import { stackServerApp } from "@/stack";
import Link from "next/link";

export default async function Home() {
  const user = await stackServerApp.getUser();

  // Redirect authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  // Show landing page for unauthenticated users
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">SaberRoar</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/handler/sign-in"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Sign In
              </Link>
              <Link 
                href="/handler/sign-up"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unleash Your
            <span className="text-indigo-600"> Learning Potential</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your educational journey with SaberRoar's powerful learning platform. 
            Track progress, manage assignments, and excel in your studies like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/handler/sign-up"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200"
            >
              Start Learning Today
            </Link>
            <Link 
              href="/handler/sign-in"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg text-lg font-semibold transition duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
