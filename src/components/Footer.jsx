import React from "react";

export default function Footer(){
  return (
    <footer className="glass-dark text-bt-muted py-8 mt-16 text-center border-t border-white/10">
      <div className="container mx-auto px-6">
        <p className="text-lg fade-in-up">&copy; 2025 Back-to-Streets. All Rights Reserved.</p>
        <p className="mt-2 fade-in-up">Contact: 
          <a href="mailto:info@backtostreets.com" className="text-bt-red hover:gradient-text transition-all duration-300 ml-2">
            info@backtostreets.com
          </a>
        </p>
      </div>
    </footer>
  )
}
