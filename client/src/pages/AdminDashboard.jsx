import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState('Admin');
  
  // Mock Data: Kyunki hum local database use kar rahe hain, stats ko dynamic dikhane ke liye
  const stats = [
    { id: 1, name: 'Total Bookings', value: '48', icon: '📅' },
    { id: 2, name: 'Available Rooms', value: '12 / 25', icon: '🏨' },
    { id: 3, name: 'Total Revenue', value: '₹1,45,000', icon: '💰' },
    { id: 4, name: 'Pending Requests', value: '5', icon: '⏳' },
  ];

  const recentBookings = [
    { id: 'BK-9921', guest: 'Rajesh Kumar', room: 'Deluxe Suite 104', checkIn: '25-06-2026', status: 'Confirmed', amount: '₹7,500' },
    { id: 'BK-9922', guest: 'Priya Sharma', room: 'Luxury Villa 02', checkIn: '26-06-2026', status: 'Pending', amount: '₹18,000' },
    { id: 'BK-9923', guest: 'Amit Singh', room: 'Standard Room 201', checkIn: '28-06-2026', status: 'Checked Out', amount: '₹3,200' },
  ];

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) setAdminName(name);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-12 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#D4AF37]/20 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif-lux text-[#D4AF37] tracking-widest uppercase">Mandar Inn Control Panel</h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back, {adminName} | Management Portal active.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button className="bg-[#E2B842] text-black font-bold px-4 py-2 rounded text-xs uppercase tracking-widest hover:bg-white transition duration-300">
            + Add New Room
          </button>
          <button className="border border-gray-700 hover:border-red-500 hover:text-red-400 font-bold px-4 py-2 rounded text-xs uppercase tracking-widest transition duration-300">
            System Logs
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <div key={item.id} className="bg-[#141414] border border-gray-900 rounded-xl p-6 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{item.name}</p>
              <h3 className="text-2xl font-bold text-white mt-2 font-serif-lux">{item.value}</h3>
            </div>
            <div className="text-3xl bg-black p-3 rounded-lg border border-[#D4AF37]/10">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Main Panel Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Table: Recent Bookings (Occupies 2 columns) */}
        <div className="lg:col-span-2 bg-[#141414] border border-gray-900 rounded-xl p-6 shadow-xl">
          <h2 className="text-lg font-serif-lux text-[#D4AF37] uppercase tracking-wider mb-4">Recent Live Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="py-3 px-2">ID</th>
                  <th className="py-3">Guest</th>
                  <th className="py-3">Room Type</th>
                  <th className="py-3">Check-In</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/40">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-black/40 transition">
                    <td className="py-4 px-2 font-mono text-xs text-gray-400">{booking.id}</td>
                    <td className="py-4 font-semibold text-white">{booking.guest}</td>
                    <td className="py-4 text-gray-300 text-xs">{booking.room}</td>
                    <td className="py-4 text-gray-400 text-xs">{booking.checkIn}</td>
                    <td className="py-4">
                      <span className={`inline-block px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold ${
                        booking.status === 'Confirmed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        booking.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 text-right font-medium text-[#E2B842]">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Settings Side Panel */}
        <div className="bg-[#141414] border border-gray-900 rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-serif-lux text-[#D4AF37] uppercase tracking-wider mb-4">Hotel Desk Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left bg-black hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 p-4 rounded-lg transition group flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#D4AF37]">Manage Room Inventory</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Edit pricing, availability & luxury features.</p>
                </div>
                <span className="text-gray-600 group-hover:text-[#D4AF37] transition">➔</span>
              </button>

              <button className="w-full text-left bg-black hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 p-4 rounded-lg transition group flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#D4AF37]">Guest Check-In Desk</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Verify details and assign digital keys.</p>
                </div>
                <span className="text-gray-600 group-hover:text-[#D4AF37] transition">➔</span>
              </button>

              <button className="w-full text-left bg-black hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 p-4 rounded-lg transition group flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#D4AF37]">Housekeeping Status</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Track cleaned, dirty, and maintenance rooms.</p>
                </div>
                <span className="text-gray-600 group-hover:text-[#D4AF37] transition">➔</span>
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800/60 mt-6 text-center">
            <p className="text-[10px] text-gray-500 tracking-widest uppercase">Mandar Inn Security Level 1 Active</p>
          </div>
        </div>

      </div>
    </div>
  );
}