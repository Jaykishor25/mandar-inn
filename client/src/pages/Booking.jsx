import React, { useState } from 'react';

export default function Booking() {
  const [booked, setBooked] = useState(false);
  return (
    <div className="pt-32 max-w-3xl mx-auto px-6 min-h-screen">
      <div className="bg-[#141414] border border-[#D4AF37]/30 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-serif-lux text-[#D4AF37] uppercase tracking-wider text-center mb-6">Reserve Your Date</h1>
        {booked ? (
          <p className="text-green-400 font-bold text-center">🎉 Booking Request Sent Successfully!</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} className="space-y-4 text-sm">
            <div>
              <label className="block text-[#D4AF37] mb-1">Event Type</label>
              <select className="w-full p-3 rounded bg-black border border-gray-700 text-white focus:border-[#D4AF37] outline-none">
                <option>Wedding Ceremony</option>
                <option>Grand Reception</option>
                <option>Birthday Celebration</option>
                <option>Corporate Gala</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#D4AF37] mb-1">Select Date</label>
                <input type="date" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />
              </div>
              <div>
                <label className="block text-[#D4AF37] mb-1">Guest Count</label>
                <input type="number" placeholder="e.g. 500" required className="w-full p-3 rounded bg-black border border-gray-700 text-white" />
              </div>
            </div>
            <button type="submit" className="w-full bg-[#E2B842] text-black font-bold py-3 rounded uppercase tracking-widest hover:bg-white transition mt-4">
              Proceed to Advance Deposit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}