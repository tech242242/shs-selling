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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-red-500/20 shadow-xl py-2"
          : "bg-black/40 backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl rotate-45 transition-all duration-500 group-hover:rotate-90"></div>
            <div className="absolute inset-2 bg-black rounded-lg"></div>
          </div>

          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
            Back-to-Streets
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-1 bg-white/5 rounded-2xl px-2 py-1 border border-white/10 shadow-md backdrop-blur-xl">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.link;

            return (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-600/60 to-purple-600/60 text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>

                  {isActive && (
                    <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 animate-ping"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden w-12 h-12 flex flex-col justify-center items-center bg-white/10 rounded-xl border border-white/20 hover:border-red-500/50 transition-all"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 my-1 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden animate-slideDown bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-xl">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-600/40 to-blue-600/40 shadow-lg"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white text-lg font-semibold">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
