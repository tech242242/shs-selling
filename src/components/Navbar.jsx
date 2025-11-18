import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark px-6 py-3 flex justify-between items-center shadow-2xl border-b border-white/10">
      <Link to="/" className="text-bt-red font-bold text-2xl gradient-text text-glow">Back-to-Streets</Link>
      <ul className="flex gap-6 text-white font-medium glass-morphism rounded-full px-6 py-2 shadow-3d-card">
        <li><Link to="/" className="hover:text-bt-red transition-colors">Home</Link></li>
        <li><Link to="/categories/school-shoes" className="hover:text-bt-red transition-colors">School Shoes</Link></li>
        <li><Link to="/categories/joggers" className="hover:text-bt-red transition-colors">Joggers</Link></li>
        <li><Link to="/categories/jordans" className="hover:text-bt-red transition-colors">Jordans</Link></li>
        <li><Link to="/categories/sneakers" className="hover:text-bt-red transition-colors">Sneakers</Link></li>
        <li><Link to="/categories/slippers" className="hover:text-bt-red transition-colors">Slippers</Link></li>
        <li><Link to="/categories/casual" className="hover:text-bt-red transition-colors">Casual</Link></li>
      </ul>
    </nav>
  )
}
