import React, { useState } from 'react';
import hotelbg from '../image.png'; // Aapki building ki photo

export default function Home() {
  const [inquiry, setInquiry] = useState({ name: '', phone: '', date: '', guests: '' });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry sent for ${inquiry.name}. We will call you back shortly!`);
  };

  return (
    <div className="bg-[#0D0D0D] text-white font-sans min-h-screen selection:bg-[#D4AF37] selection:text-black">
      
      {/* 1. BRIGHT HERO BANNER WITH YOUR BUILDING PHOTO */}
      <section className="relative h-[90vh] bg-cover bg-right flex items-center pt-20" 
               style={{ backgroundImage: `linear-gradient(to right, rgba(13,13,13,0.6) 20%, rgba(13,13,13,0) 100%), linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${hotelbg})` }}>
        
        {/* Navigation Arrows */}
        <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#D4AF37]/80 border border-[#D4AF37]/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition">❮</button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#D4AF37]/80 border border-[#D4AF37]/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition">❯</button>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-7xl font-serif-lux text-[#D4AF37] tracking-wide leading-tight drop-shadow-lg">
                Rajbir's <br/> <span className="font-extrabold text-white text-6xl md:text-8xl">Mandar Inn</span>
              </h1>
              <p className="text-lg md:text-xl text-[#D4AF37] tracking-widest font-serif-lux uppercase border-b border-[#D4AF37]/20 pb-4 inline-block">
                Banquet Hall For All Occasions
              </p>
            </div>
            
            <p className="text-gray-200 text-sm md:text-base max-w-lg leading-relaxed font-light drop-shadow-md">
              A perfect venue for your Weddings, Receptions, Birthday Parties, Corporate Events & Family Celebrations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#inquiry-form" className="bg-[#E2B842] text-black font-bold text-xs px-6 py-4 rounded shadow-lg hover:bg-white transition uppercase tracking-wider">📅 Book Your Event</a>
              <a href="tel:+911234567890" className="border border-white/60 text-white font-bold text-xs px-6 py-4 rounded hover:bg-white hover:text-black transition uppercase tracking-wider">📞 Call Now</a>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
          <span className="w-2 h-2 bg-white/30 rounded-full"></span>
          <span className="w-2 h-2 bg-white/30 rounded-full"></span>
        </div>

        {/* Floating WhatsApp */}
        <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="absolute right-6 bottom-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 z-30">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.482 8.415-.004 6.552-5.342 11.9-11.893 11.9-2.007-.002-3.98-.51-5.732-1.472L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.885-6.964C16.528 1.832 14.077.809 11.95.809c-5.437 0-9.86 4.42-9.864 9.852-.001 1.702.451 3.361 1.311 4.816L2.344 21.15l5.811-1.523z"/></svg>
        </a>
      </section>

      {/* 2. MAROON STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-40">
        <div className="bg-[#3D0C11] border-2 border-[#D4AF37] rounded-xl p-5 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r border-[#D4AF37]/20 last:border-none py-2">
            <span className="text-3xl font-bold text-[#D4AF37] font-serif-lux block">500+</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-300">Events Hosted</span>
          </div>
          <div className="border-r border-[#D4AF37]/20 last:border-none py-2">
            <span className="text-3xl font-bold text-[#D4AF37] font-serif-lux block">10,000+</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-300">Happy Guests</span>
          </div>
          <div className="border-r border-[#D4AF37]/20 last:border-none py-2">
            <span className="text-3xl font-bold text-[#D4AF37] font-serif-lux block">5 ★</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-300">Premium Service</span>
          </div>
          <div className="border-r border-[#D4AF37]/20 last:border-none py-2">
            <span className="text-3xl font-bold text-[#D4AF37] font-serif-lux block">Best Venue</span>
            <span className="text-[11px] uppercase tracking-widest text-gray-300">In Your City</span>
          </div>
        </div>
      </section>

      {/* 3. 6 SERVICES CARDS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif-lux font-bold uppercase tracking-widest text-gold pb-2 border-b border-[#D4AF37]/30 inline-block">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { title: 'Wedding', desc: 'Make your dream wedding truly unforgettable.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500' },
            { title: 'Reception', desc: 'Elegant venue for grand receptions.', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500' },
            { title: 'Birthday Party', desc: 'Celebrate your special day with luxury.', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500' },
            { title: 'Corporate Events', desc: 'Perfect place for meetings, seminars & conferences.', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500' },
            { title: 'Engagement', desc: 'Create beautiful memories before the big day.', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500' },
            { title: 'Catering', desc: 'Delicious food options for every occasion.', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500' }
          ].map((srv, idx) => (
            <div key={idx} className="bg-[#141414] border border-[#D4AF37]/20 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-[#D4AF37] transition-all duration-300 shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-black border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                </div>
              </div>
              <div className="p-4 pt-6 text-center flex-grow flex flex-col justify-between">
                <h3 className="text-xs font-bold text-[#D4AF37] tracking-widest mb-2 uppercase font-serif-lux">{srv.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OBLONG FORM BAR */}
      <section id="inquiry-form" className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#EFEADB] text-black rounded-lg p-6 border border-[#D4AF37] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left min-w-[180px]">
            <h3 className="text-lg font-serif-lux font-bold text-[#3D0C11] uppercase tracking-wider">Book Your Event</h3>
            <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto lg:mx-0 my-1"></div>
          </div>
          
          <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <input type="text" placeholder="Your Name" required className="p-3 text-xs rounded bg-white border border-gray-300 text-black" value={inquiry.name} onChange={e => setInquiry({...inquiry, name: e.target.value})} />
            <input type="tel" placeholder="Phone Number" required className="p-3 text-xs rounded bg-white border border-gray-300 text-black" value={inquiry.phone} onChange={e => setInquiry({...inquiry, phone: e.target.value})} />
            <input type="date" required className="p-3 text-xs rounded bg-white border border-gray-300 text-black" value={inquiry.date} onChange={e => setInquiry({...inquiry, date: e.target.value})} />
            <input type="number" placeholder="Guests" required className="p-3 text-xs rounded bg-white border border-gray-300 text-black" value={inquiry.guests} onChange={e => setInquiry({...inquiry, guests: e.target.value})} />
            <button type="submit" className="bg-[#3D0C11] hover:bg-black text-white text-xs font-bold uppercase tracking-widest py-4 px-6 rounded min-w-[160px] transition duration-300 lg:col-span-4 mt-2">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}