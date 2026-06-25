import React from 'react';

export default function UserDashboard() {
  return (
    <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-serif-lux text-[#D4AF37] mb-2 uppercase tracking-wider">User Dashboard</h1>
        <p className="text-gray-400 mb-6 text-sm">Welcome back! Yahan aap apne booked events ka status track kar sakte hain.</p>
        
        <div className="border border-[#D4AF37]/10 rounded-lg p-4 bg-black/40">
          <div className="flex justify-between items-center text-xs text-gray-400 border-b border-gray-800 pb-2 mb-2">
            <span>EVENT TYPE</span>
            <span>DATE</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-white">Grand Wedding Ceremony</span>
            <span className="text-gray-300">25 Dec 2026</span>
            <span className="bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-500/20">Pending Approval</span>
          </div>
        </div>
      </div>
    </div>
  );
}