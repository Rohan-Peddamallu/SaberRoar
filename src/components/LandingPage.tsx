import Link from "next/link";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav className="shadow-lg" style={{ backgroundColor: '#b3a169' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-black text-white tracking-wide">SaberRoar</h1>
            </div>
            
            {/* Social Media Links */}
            <div className="hidden md:flex items-center space-x-6">
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

            <div className="flex items-center space-x-4">
              <Link 
                href="/handler/sign-in"
                className="text-white hover:opacity-80 px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 transform"
              >
                Sign In
              </Link>
              <Link 
                href="/handler/sign-up"
                className="text-black px-6 py-3 rounded-lg text-lg font-bold transition-all duration-200 hover:scale-110 transform shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: '#e6bf00' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl font-black text-black mb-6 leading-none">
              SABER
              <span 
                className="block text-8xl md:text-10xl"
                style={{ color: '#e6bf00', textShadow: '4px 4px 0px #b3a169' }}
              >
                ROAR
              </span>
            </h1>
            {/* Class Photo Section */}
            <div className="flex justify-center mb-12">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" style={{ background: 'linear-gradient(45deg, #e6bf00, #b3a169, #e6bf00)' }}></div>
                <img 
                  src="/class.JPG" 
                  alt="SaberRoar Class Photo" 
                  className="relative rounded-3xl shadow-2xl transition-all duration-700 ease-in-out transform group-hover:scale-105 group-hover:rotate-1 max-w-5xl w-full h-auto border-8 border-white"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}