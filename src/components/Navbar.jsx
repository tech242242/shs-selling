import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bt-dark/90 backdrop-blur-2xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-bt-red via-bt-purple to-bt-blue bg-clip-text text-transparent animate-gradient-shift text-shadow-glow-red"
          >
            Back-to-Streets
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="glass-morphism rounded-2xl px-6 py-2 shadow-3d-card border border-white/10">
              <ul className="flex items-center gap-8 text-white font-medium">
                <li>
                  <Link 
                    to="/" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/school-shoes" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    School Shoes
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/joggers" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Joggers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/jordans" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Jordans
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/sneakers" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Sneakers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/slippers" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Slippers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/categories/casual" 
                    className="relative px-3 py-2 transition-all duration-300 hover:text-bt-red group"
                  >
                    Casual
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-bt-red to-bt-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden glass-morphism rounded-lg p-2 shadow-3d-card border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-morphism rounded-2xl mt-4 p-6 shadow-3d-card border border-white/10 animate-fade-in-up">
            <ul className="space-y-4 text-white font-medium">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/school-shoes" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  School Shoes
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/joggers" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Joggers
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/jordans" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jordans
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/sneakers" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sneakers
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/slippers" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Slippers
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/casual" 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 hover:text-bt-red border-l-2 border-transparent hover:border-bt-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Casual
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
