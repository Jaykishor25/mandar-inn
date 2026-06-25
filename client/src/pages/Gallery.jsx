import React from 'react';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500'
  ];
  return (
    <div className="pt-32 max-w-7xl mx-auto px-6 min-h-screen">
      <h1 className="text-4xl font-serif-lux text-[#D4AF37] uppercase tracking-widest text-center mb-12">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div key={i} className="border border-[#D4AF37]/20 rounded-lg overflow-hidden h-60 shadow-lg">
            <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}