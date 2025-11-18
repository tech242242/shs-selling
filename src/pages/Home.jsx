import React from "react";
import { Link } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";

const categories = [
  { id: "school-shoes", name: "School Shoes", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
  { id: "joggers", name: "Joggers", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400" },
  { id: "jordans", name: "Jordans", img: "https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?w=400" },
  { id: "sneakers", name: "Sneakers", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
  { id: "slippers", name: "Slippers", img: "https://images.unsplash.com/photo-1560769624-7b2aaaa4d0f3?w=400" },
  { id: "casual", name: "Casual", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent leading-tight">
            STEP INTO<br />THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wider">
            EXCLUSIVE MODERN FOOTWEAR
          </p>
          <Link 
            to="/categories" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-lg px-12 py-4 rounded-full hover:from-yellow-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/30"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            EXPLORE CATEGORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={category.id} 
                to={`/categories/${category.id}`}
                className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.img} 
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm font-semibold">Explore Collection</span>
                    <span className="ml-2 transform group-hover:translate-x-2 transition">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            LATEST ARRIVALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ShoeCard product={{
              id: "demo-1",
              name: "NEO-RUNNER 3000",
              price: 7999,
              images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
              category: "sneakers",
              location: "Lahore"
            }}/>
            <ShoeCard product={{
              id: "demo-2",
              name: "URBAN GLIDE",
              price: 15999,
              images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500"],
              category: "jordans", 
              location: "Karachi"
            }}/>
            <ShoeCard product={{
              id: "demo-3",
              name: "STREET KING",
              price: 12499,
              images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"],
              category: "casual",
              location: "Islamabad"
            }}/>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO STEP UP YOUR STYLE?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of satisfied customers with our premium footwear collection
          </p>
          <Link 
            to="/categories" 
            className="inline-block bg-white text-black font-bold text-lg px-12 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-2xl"
          >
            BROWSE ALL COLLECTIONS
          </Link>
        </div>
      </section>
    </div>
  );
}
