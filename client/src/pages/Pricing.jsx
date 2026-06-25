import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    { name: "Royal Wedding Package", price: "2,500,000", features: ["Full Luxury Gold Decoration", "Premium Multi-cuisine Catering", "Advanced Sound & Stage Lights", "Capacity up to 1200 Guests"] },
    { name: "Grand Reception Package", price: "1,500,000", features: ["Themed Flower Design", "Buffet Dinner Management", "DJ Production & Stage Layout", "Capacity up to 800 Guests"] },
    { name: "Premium Birthday / Party Set", price: "500,000", features: ["Balloons & Standard Light Theme", "Multi-cuisine Food Menu", "Sound System Integrated", "Capacity up to 300 Guests"] }
  ];

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl font-serif-lux text-center text-[#D4AF37] uppercase tracking-widest mb-2">Event Packages</h1>
      <p className="text-center text-gray-400 mb-12 text-sm">Choose an elite blueprint for your dynamic venue arrangement.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div key={i} className="bg-[#141414] border border-[#D4AF37]/20 rounded-xl p-8 shadow-2xl flex flex-col justify-between hover:border-[#D4AF37] transition duration-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-serif-lux tracking-wide">{pkg.name}</h3>
              <div className="text-2xl font-extrabold text-[#D4AF37] mb-6 font-serif-lux">₹{pkg.price}</div>
              <ul className="space-y-3 mb-8 text-xs text-gray-400">
                {pkg.features.map((feat, idx) => <li key={idx} className="flex items-center gap-2">✓ {feat}</li>)}
              </ul>
            </div>
            <Link to="/booking" className="w-full text-center bg-[#E2B842] text-black font-bold text-xs py-3 rounded hover:bg-white uppercase tracking-wider transition">Book This Package</Link>
          </div>
        ))}
      </div>
    </div>
  );
}