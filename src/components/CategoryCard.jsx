import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/categories/${category.id}`} className="group relative block rounded-2xl overflow-hidden shadow-3d-card glass-morphism border border-white/10">
      <img 
        src={category.img} 
        alt={category.name} 
        className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-xl font-bold text-white text-glow">{category.name}</h3>
        <div className="w-0 group-hover:w-12 h-1 bg-bt-red rounded-full mt-2 transition-all duration-300"></div>
      </div>
    </Link>
  )
}
