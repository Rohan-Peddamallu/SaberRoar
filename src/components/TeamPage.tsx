"use client";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

export function TeamPage() {
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
              <Link href="/">
                <h1 className="text-3xl font-black text-white tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
                  SABER<span style={{ color: '#e6bf00' }}>ROAR</span>
                </h1>
              </Link>
            </div>
            
            {/* Center - Social Media Links */}
            <div className="flex items-center space-x-6">
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
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 pt-32 pb-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10" style={{ backgroundColor: '#e6bf00' }}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: '#b3a169' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-black dark:text-white">Meet the </span>
              <span style={{ color: '#e6bf00' }}>Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The talented students behind SaberRoar's video production
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Mr. Deane */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/deane.JPG" 
                  alt="Mr. Deane" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Mr. Deane</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">nabeel.deane@franklin.k12.wi.us</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Teacher, Advisor, Video Production</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Teaching, Mentoring, Producing, Directing, Coordinating</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "Leading and inspiring the next generation of video production professionals at Franklin High School."
                  </p>
                </div>
              </div>
            </div>

            {/* Nolan Gertz */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Nolan.JPG" 
                  alt="Nolan Gertz" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Nolan Gertz</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">nolan.gertz@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, On-Screen Talent</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Writing, Producing, Creative Work, News, Feature, Short Film, Music Video, Interview, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "My name is Nolan Gertz and I am a Junior here at Franklin High School. I especially enjoy being in front of the camera and bringing something positive to each show."
                  </p>
                </div>
              </div>
            </div>

            {/* Sufyaan Bhimani */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Sufyaan.JPG" 
                  alt="Sufyaan Bhimani" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Sufyaan Bhimani</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">sufyaan.bhimani@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">On-Screen Talent, Writing, Producing, Creative Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Short Film, Commercial, Directing, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "My name is Sufyaan Bhimani. I've been in a lot of films in Saber Roar, one of my favorite films that I've acted in is Bowling with punishments. I am a very creative person and I can think of many ideas on spot."
                  </p>
                </div>
              </div>
            </div>

            {/* Lilyana Bullamore */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Lilyana.JPG" 
                  alt="Lilyana Bullamore" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Lilyana Bullamore</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">lilyana.bullamore@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Writing, Producing, Creative Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Short Film, Arts & Culture, Directing, Coordinating, Social Media, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I've worked on a variety of projects and in different roles. My favorite things to make are short films and interviews, whether I'm behind the camera or in front of it. Outside of school, I enjoy doing photography in my free time."
                  </p>
                </div>
              </div>
            </div>

            {/* Aaron Greve */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Aaron.JPG" 
                  alt="Aaron Greve" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Aaron Greve</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">aaron.greve@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Editing, On-Screen Talent, Writing, Producing, Creative Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Short Film, Commercial, Arts & Culture, Social Media</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I'm mainly a creative director on the Saber Roar. I've taken part in several projects prior to joining, such as playing as the Jack in the Box mascot twice for commercial and horror projects."
                  </p>
                </div>
              </div>
            </div>

            {/* John Akgun */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/JohnA.JPG" 
                  alt="John Akgun" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">John Akgun</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">john.akgun@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Production</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Lighting, Audio, Editing, On-Screen Talent, Writing, Producing, News, Feature, Short Film, Commercial, Music Video, PSA, Interview, Arts & Culture, Directing, Coordinating, Social Media, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I am the Coordinating Producer for TSR and a dedicated individual with a strong passion for video production. I ensure every episode reaches the highest level of quality possible."
                  </p>
                </div>
              </div>
            </div>

            {/* Jeremiah Brand */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Jeremiah.JPG" 
                  alt="Jeremiah Brand" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Jeremiah Brand</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">jeremiah.brand@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">On-Screen Talent, Video Production</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Short Film, Music Video, Interview</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "My name is Jeremiah Brand. I am a senior and I have been in video production since freshman year. My talents include interviewing, acting, and recording video."
                  </p>
                </div>
              </div>
            </div>

            {/* Benjamin Brefka */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Benjamin.JPG" 
                  alt="Benjamin Brefka" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Benjamin Brefka</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">benjamin.brefka@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Audio, Editing, News, Feature</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I am mostly a videographer in each of my segments. I have taken part with mostly informational segments starting with the New Beginnings and going to the fire station."
                  </p>
                </div>
              </div>
            </div>

            {/* Kaylee Knaak */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Kaylee.JPG" 
                  alt="Kaylee Knaak" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Kaylee Knaak</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">kaylee.knaak@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">On-Screen Talent, Sports Director</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">News, Feature, Interview</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "As the Sports Director for TSR, I help lead coverage of Franklin High School athletics through filming, editing, and producing sports content that showcases our student-athletes."
                  </p>
                </div>
              </div>
            </div>

            {/* Braeden LaPorte */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Braeden.JPG" 
                  alt="Braeden LaPorte" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Braeden LaPorte</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">braeden.laporte@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Editing, News Director</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">News, Feature, Interview</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "My name is Braeden LaPorte, I am a Junior at Franklin High school. I am the News Director of the Saber Roar. I am usually the person behind the creation of news segments."
                  </p>
                </div>
              </div>
            </div>

            {/* Serena Acevedo */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Serena.JPG" 
                  alt="Serena Acevedo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Serena Acevedo</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">serena.acevedo@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Lighting, Creative Director</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Short Film, Music Video, Arts & Culture, Directing, Social Media, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I take role as Creative Director in the Saber Roar and lead most creative projects. I've been interested in creative film since middle school hoping to do it as a career."
                  </p>
                </div>
              </div>
            </div>

            {/* Marley Burkett */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Marley.JPG" 
                  alt="Marley Burkett" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Marley Burkett</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">marley.burkett@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Social Media Manager</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Lighting, Editing, Short Film, Interview, Social Media</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "Being part of the Saber Roar has helped me grow a lot as the social media manager. Working on the broadcast taught me how to meet deadlines, work with a team, and stay creative under pressure."
                  </p>
                </div>
              </div>
            </div>

            {/* Dulce Castro */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Dulce.JPG" 
                  alt="Dulce Castro" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Dulce Castro</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">dulce.castro@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, On-Screen Talent</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Arts & Culture, Directing, Coordinating, Social Media, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I've taken on many creative roles that include on-screen talent, and directing. Outside of the class I'm also involved in arts and culture projects, coordinating events, and running social media pages."
                  </p>
                </div>
              </div>
            </div>

            {/* Asa Arvanetes */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Asa.JPG" 
                  alt="Asa Arvanetes" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Asa Arvanetes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">asa.arvanetes@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Music Video, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "My Name is Asa Arvanetes and I'm a junior at Franklin high school. I enjoy doing new things in the Saber Roar and creating new bonds with the community around us."
                  </p>
                </div>
              </div>
            </div>

            {/* John Waldenmeyer */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/JohnW.JPG" 
                  alt="John Waldenmeyer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">John Waldenmeyer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">john.waldenmeyer@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Editing, On-Screen Talent</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Writing, Producing, Creative Work, News, Feature, Short Film, Commercial, Arts & Culture, Directing, Social Media, Marketing</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I have taken part in the Saber Roar as an actor and camera crew for some projects like the first episode and second episode. I like to act, draw, and play some video games."
                  </p>
                </div>
              </div>
            </div>

            {/* Aiden Yang */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Aiden.JPG" 
                  alt="Aiden Yang" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Aiden Yang</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">aiden.yang@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work, Editing, Coordinating Producer</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Writing, Producing, Creative Work, Short Film, Interview, Arts & Culture, Directing, Coordinating</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I'm Aiden! Currently a senior in FHS, I'm one of the Coordinating Producers in The Saber Roar. I really love to create content for myself and The Saber Roar and hope to continue it in the future."
                  </p>
                </div>
              </div>
            </div>

            {/* Elijah Hendon */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#e6bf00] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 transform">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="/Elijah.JPG" 
                  alt="Elijah Hendon" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-[#e6bf00] transition-colors duration-300">Elijah Hendon</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">elijah.hendon@franklinsabers.org</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Specializations</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Video, Photography, Technical Work</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#b3a169] dark:text-[#e6bf00] mb-2 uppercase tracking-wide">Skills</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Lighting, Audio, Editing, Writing, Producing, News, Feature, Short Film, Commercial, Music Video, PSA, Interview, Directing, Coordinating, Social Media</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    "I'm definitely the obsessor of the saber roar. I have directed most of the segments I'm in and have edited EVERY single project I'm in."
                  </p>
                </div>
              </div>
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
                Franklin High School's video production team, recording sports games and school events.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#e6bf00' }}>Quick Links</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform">Home</Link>
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

