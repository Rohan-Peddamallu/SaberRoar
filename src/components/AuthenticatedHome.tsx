"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@stackframe/stack";
import { useUserSync } from "@/hooks/useUserSync";

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
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header className="shadow" style={{ backgroundColor: '#b3a169' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                SaberRoar Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="overflow-hidden shadow rounded-lg mb-6" style={{ backgroundColor: '#b3a169' }}>
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-white mb-2">
                Welcome back, {dbUser?.name || stackUser?.displayName || "User"}!
              </h2>
              <p className="text-sm text-white opacity-90">
                Ready to continue your learning journey?
              </p>
            </div>
          </div>

          {/* IMAGE CAROUSEL SECTION - THIS IS THE IMPORTANT PART */}
          <div className="mb-8 flex justify-center">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => {
                console.log("Mouse entered - starting carousel!");
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                console.log("Mouse left - stopping carousel!");
                setIsHovering(false);
              }}
            >
              <div className="absolute -inset-4 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ background: 'linear-gradient(45deg, #e6bf00, #b3a169, #e6bf00)' }}></div>
              <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`SaberRoar Image ${currentImageIndex + 1}`}
                  className="transition-all duration-500 ease-in-out transform group-hover:scale-105 max-w-4xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Debug info */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  Hovering: {isHovering ? 'YES' : 'NO'} | Image: {currentImageIndex + 1}/{images.length}
                </div>
                
                {/* Image indicator dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'scale-125' 
                          : 'opacity-50'
                      }`}
                      style={{ 
                        backgroundColor: index === currentImageIndex ? '#e6bf00' : '#ffffff'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: '#ffffff', border: '2px solid #b3a169' }}>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6bf00' }}>
                    <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-black">5</h3>
                    <p style={{ color: '#b3a169' }}>Active Courses</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: '#ffffff', border: '2px solid #b3a169' }}>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6bf00' }}>
                    <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-black">12</h3>
                    <p style={{ color: '#b3a169' }}>Completed Assignments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden shadow rounded-lg" style={{ backgroundColor: '#ffffff', border: '2px solid #b3a169' }}>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#e6bf00' }}>
                    <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-black">3</h3>
                    <p style={{ color: '#b3a169' }}>Pending Tasks</p>
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