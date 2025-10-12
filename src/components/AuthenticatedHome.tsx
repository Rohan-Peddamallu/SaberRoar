"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@stackframe/stack";
import { useUserSync } from "@/hooks/useUserSync";
import { ThemeToggle } from "./ThemeToggle";

export function AuthenticatedHome() {
  const { stackUser, dbUser, loading, error, syncUser } = useUserSync();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Array of images from 1.JPG to 7.JPG plus class.JPG
  const images = [
    "/class.JPG",
    "/1.JPG",
    "/2.JPG", 
    "/3.JPG",
    "/4.JPG",
    "/5.JPG",
    "/6.JPG",
    "/7.JPG"
  ];

  // Sync user on mount if not already synced
  useEffect(() => {
    if (stackUser && !dbUser && !loading) {
      syncUser();
    }
  }, [stackUser, dbUser, loading, syncUser]);

  // Auto-slide images when hovering
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // Change image every 1 second
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovering, images.length]);

  // Reset to first image when not hovering
  useEffect(() => {
    if (!isHovering) {
      setCurrentImageIndex(0);
    }
  }, [isHovering]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2" style={{ borderColor: '#e6bf00' }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-white">
        <div className="text-black text-center">
          Error: {error}
        </div>
        <button 
          onClick={syncUser}
          className="px-4 py-2 text-white rounded hover:opacity-90"
          style={{ backgroundColor: '#e6bf00' }}
        >
          Retry Sync
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="shadow-xl backdrop-blur-sm bg-opacity-95" style={{ backgroundColor: '#b3a169' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-black text-white tracking-wide">
                SABER<span style={{ color: '#e6bf00' }}>ROAR</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-xl mb-8 overflow-hidden">
            <div className="px-8 py-6">
              <h2 className="text-2xl font-bold text-black mb-2">
                Welcome back, {dbUser?.name || stackUser?.displayName || "User"}! 🦁
              </h2>
              <p className="text-black/80 dark:text-white/80 text-lg">
                Ready to capture Franklin High School's greatest moments?
              </p>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black text-black dark:text-white mb-3">
                SABER<span style={{ color: '#e6bf00' }}>ROAR</span> 
                <span className="text-3xl font-bold text-gray-700 dark:text-gray-300 ml-3">Memories</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our video coverage of Franklin High School sports and events
              </p>
            </div>
            <div className="flex justify-center">
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute -inset-6 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ background: 'linear-gradient(45deg, #e6bf00, #b3a169, #e6bf00)' }}></div>
                <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                  <img 
                    src={images[currentImageIndex]} 
                    alt={`SaberRoar Image ${currentImageIndex + 1}`}
                    className="transition-all duration-500 ease-in-out transform group-hover:scale-105 max-w-5xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-base font-medium">✨ Hover to see more memories</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-yellow-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
                    <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">5</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Active Courses</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-yellow-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">12</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Completed Tasks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-yellow-400">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">3</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Upcoming Events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}