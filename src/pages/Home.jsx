import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 text-center container fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text text-glow">
            STEP INTO THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 glass-morphism rounded-lg p-6 inline-block">
            EXCLUSIVE MODERN FOOTWEAR
          </p>
          <div className="mt-8">
            <Link to="/categories" className="btn-modern-3d text-lg">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          EXPLORE CATEGORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category cards will go here */}
        </div>
      </section>
    </div>
  );
}
