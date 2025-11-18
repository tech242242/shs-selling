import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark px-6 py-4 flex justify-between items-center shadow-2xl border-b border-white/10">
      <Link to="/" className="text-2xl font-bold gradient-text text-glow">Back-to-Streets</Link>
      <ul className="flex gap-8 text-white font-medium glass-morphism rounded-full px-8 py-3 shadow-3d-card">
        <li><Link to="/" className="hover:text-bt-red transition-colors duration-300">Home</Link></li>
        <li><Link to="/categories/school-shoes" className="hover:text-bt-red transition-colors duration-300">School Shoes</Link></li>
        <li><Link to="/categories/joggers" className="hover:text-bt-red transition-colors duration-300">Joggers</Link></li>
        <li><Link to="/categories/jordans" className="hover:text-bt-red transition-colors duration-300">Jordans</Link></li>
        <li><Link to="/categories/sneakers" className="hover:text-bt-red transition-colors duration-300">Sneakers</Link></li>
        <li><Link to="/categories/slippers" className="hover:text-bt-red transition-colors duration-300">Slippers</Link></li>
        <li><Link to="/categories/casual" className="hover:text-bt-red transition-colors duration-300">Casual</Link></li>
      </ul>
    </nav>
  )
}
