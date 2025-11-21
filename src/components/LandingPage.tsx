"use client";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

// Image Carousel Component
function ImageCarousel() {
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
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={image}
                alt={`SaberRoar Image ${index + 1}`}
                className="w-full h-auto max-w-5xl mx-auto"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="relative shadow-xl backdrop-blur-sm bg-opacity-95" style={{ backgroundColor: '#b3a169' }}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            {/* Left side - SaberRoar text */}
            <div className="flex items-center flex-1">
              <h1 className="text-3xl font-black text-white tracking-wide hover:scale-105 transition-transform duration-300">
                SABER<span style={{ color: '#e6bf00' }}>ROAR</span>
              </h1>
            </div>
            
            {/* Center - Meet the Team Link and Social Media Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/team"
                className="text-white hover:text-yellow-300 font-semibold transition-all duration-300 hover:underline"
              >
                Meet the Team
              </Link>
              <a 
                href="https://www.youtube.com/@TheSaberRoar/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 hover:rotate-3 transition-all duration-300 ease-in-out transform"
                aria-label="YouTube"
              >
                <FaYoutube size={28} />
              </a>
              <a 
                href="https://www.instagram.com/fhssaberroar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 hover:rotate-3 transition-all duration-300 ease-in-out transform"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a 
                href="https://x.com/thesaberroar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 hover:rotate-3 transition-all duration-300 ease-in-out transform"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
              <a 
                href="https://www.facebook.com/p/FHS-Saber-Roar-61580378422326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 hover:rotate-3 transition-all duration-300 ease-in-out transform"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
            </div>

            {/* Right side - Theme toggle and Sign In button */}
            <div className="flex items-center flex-1 justify-end space-x-4">
              <ThemeToggle />
              <Link 
                href="/handler/sign-in"
                className="relative px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:scale-110 transform shadow-lg hover:shadow-2xl overflow-hidden group"
                style={{ backgroundColor: '#e6bf00' }}
              >
                <span className="relative z-10 text-black font-black tracking-wide">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e6bf00' }}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: '#b3a169' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            {/* School Name */}
            <div className="mb-6">
              <p className="text-lg font-semibold tracking-wide uppercase dark:text-gray-300" style={{ color: '#b3a169' }}>
                Franklin High School
              </p>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
              <span className="text-black dark:text-white">SABER</span>
              <span 
                className="block text-7xl md:text-9xl"
                style={{ color: '#e6bf00', textShadow: '3px 3px 0px #b3a169' }}
              >
                ROAR
              </span>
            </h1>
            
            {/* Image Carousel Section */}
            <div className="flex justify-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-6 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" style={{ background: 'linear-gradient(45deg, #e6bf00, #b3a169, #e6bf00)' }}></div>
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
              What We <span style={{ color: '#e6bf00' }}>Do</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SaberRoar captures and shares Franklin High School&apos;s greatest moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Sports Coverage</h3>
              <p className="text-gray-600 dark:text-gray-300">Record and stream Franklin High School sports games</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">School Events</h3>
              <p className="text-gray-600 dark:text-gray-300">Document school activities and special events</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Content Creation</h3>
              <p className="text-gray-600 dark:text-gray-300">Produce videos showcasing school life and achievements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-black to-gray-900 text-white py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: '#e6bf00' }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#b3a169' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-4">
                <span className="text-white">SABER</span>
                <span style={{ color: '#e6bf00' }}>ROAR</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Franklin High School&apos;s video production team, recording sports games and school events.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#e6bf00' }}>Quick Links</h4>
              <div className="space-y-3">
                <Link href="/handler/sign-in" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform">Sign In</Link>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#e6bf00' }}>Follow Us</h4>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="https://www.youtube.com/@TheSaberRoar/featured" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform">
                  <FaYoutube size={28} />
                </a>
                <a href="https://www.instagram.com/fhssaberroar/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform">
                  <FaInstagram size={28} />
                </a>
                <a href="https://x.com/thesaberroar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform">
                  <FaTwitter size={28} />
                </a>
                <a href="https://www.facebook.com/p/FHS-Saber-Roar-61580378422326/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform">
                  <FaFacebook size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 SaberRoar - Franklin High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}