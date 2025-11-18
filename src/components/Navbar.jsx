import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "School Shoes", link: "/categories/school-shoes", icon: "👟" },
    { name: "Joggers", link: "/categories/joggers", icon: "🏃" },
    { name: "Jordans", link: "/categories/jordans", icon: "⭐" },
    { name: "Sneakers", link: "/categories/sneakers", icon: "👟" },
    { name: "Slippers", link: "/categories/slippers", icon: "🩴" },
    { name: "Casual", link: "/categories/casual", icon: "👞" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-bt-dark/98 backdrop-blur-3xl border-b border-white/10 shadow-2xl py-2" 
        : "bg-transparent backdrop-blur-2xl border-b border-white/5 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* 🔥 Animated Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-bt-red to-bt-blue rounded-xl rotate-45 transition-transform duration-500 group-hover:rotate-90"></div>
            <div className="absolute inset-2 bg-bt-dark rounded-lg"></div>
            <div className="absolute inset-3 bg-gradient-to-r from-bt-red to-bt-blue rounded-md opacity-70 animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-bt-red via-bt-purple to-bt-blue bg-clip-text text-transparent animate-gradient-shift">
            Back-to-Streets
          </h1>
        </Link>

        {/* 🌐 Advanced Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-1 bg-white/5 rounded-2xl p-1 border border-white/10 shadow-glass">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.link}
                  className={`relative flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 group overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-r from-bt-red/60 to-bt-blue/60 text-white shadow-neon-red"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {/* Icon */}
                  <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  
                  {/* Text */}
                  <span className="font-semibold whitespace-nowrap">
                    {item.name}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 animate-pulse"></div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-bt-red/20 to-bt-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <button
          className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center bg-white/5 rounded-xl border border-white/10 hover:border-bt-red/50 transition-all duration-300 group"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              open ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${
              open ? '-rotate-45 -translate-y-2' : 'translate-y-0'
            }`}></span>
          </div>
          
          {/* Button Glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-bt-red to-bt-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* 📱 Advanced Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bt-dark/98 backdrop-blur-3xl border-b border-white/10 shadow-2xl animate-fade-in-up">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={`flex items-center space-x-4 p-4 rounded-xl border border-white/10 transition-all duration-300 transform hover:scale-105
                    ${
                      isActive
                        ? "bg-gradient-to-r from-bt-red/40 to-bt-blue/40 shadow-neon-red"
                        : "bg-white/5 hover:bg-gradient-to-r hover:from-bt-red/20 hover:to-bt-blue/20"
                    }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold text-white flex-1 text-left">
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
