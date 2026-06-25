import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', adminSecret: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'mock-jwt-token');
    if (form.adminSecret === 'RAJBIR_INN_ADMIN_VERIFICATION_TOKEN_9988') {
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else {
      localStorage.setItem('role', 'user');
      navigate('/dashboard');
    }
    window.location.reload();
  };

  return (
    <div className="pt-32 max-w-md mx-auto px-4 min-h-screen">
      <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 rounded-xl shadow-2xl text-xs">
        <h2 className="text-2xl font-bold text-[#D4AF37] font-serif-lux text-center uppercase tracking-wider mb-6">Create Profile</h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input type="text" required className="w-full bg-black border border-gray-700 p-3 rounded text-white focus:border-[#D4AF37] outline-none" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Email Address</label>
            <input type="email" required className="w-full bg-black border border-gray-700 p-3 rounded text-white focus:border-[#D4AF37] outline-none" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Password</label>
            <input type="password" required className="w-full bg-black border border-gray-700 p-3 rounded text-white focus:border-[#D4AF37] outline-none" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Admin Passkey Secret (Optional)</label>
            <input type="password" className="w-full bg-black border border-gray-700 p-3 rounded text-white focus:border-[#D4AF37] outline-none" value={form.adminSecret} onChange={e => setForm({...form, adminSecret: e.target.value})} />
          </div>
          <button type="submit" className="w-full bg-[#E2B842] text-black font-bold py-3 rounded uppercase tracking-wider hover:bg-white transition mt-4">Initialize Profile</button>
        </form>
      </div>
    </div>
  );
}