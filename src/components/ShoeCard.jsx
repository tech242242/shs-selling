import React from "react";
import { Link } from "react-router-dom";

export default function ShoeCard({ product }){
  return (
    <Link to={`/product/${product.id}`} className="block shoe-card-3d glass-morphism rounded-2xl p-5 border border-white/10">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={product.images?.[0] || 'https://i.ibb.co/4R3r0LBm/49611315729d7b19fd06d9c0d41980cd.jpg'} 
          alt={product.name} 
          className="w-full h-56 object-cover rounded-lg transform transition-transform group-hover:scale-110" 
        />
        <div className="absolute top-3 right-3 glass-dark px-3 py-1 rounded-full text-sm border-glow">
          {product.category}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-bt-red font-bold text-xl gradient-text">PKR {product.price}</span>
          <span className="text-sm text-bt-muted glass-morphism px-2 py-1 rounded-md">
            {product.location || 'Unknown'}
          </span>
        </div>
      </div>
    </Link>
  )
}
