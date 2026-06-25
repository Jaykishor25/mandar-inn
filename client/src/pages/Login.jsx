import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // DYNAMIC BACKEND URL: Local par localhost chalega, production me live URL
    const BACKEND_BASE_URL = window.location.hostname === 'localhost' 
      ? 'http://localhost:5000' 
      : 'https://aapka-backend-live-url.onrender.com'; // Deploy ke baad yahan apna live URL daalna hoga

    const endpoint = isSignup 
      ? `${BACKEND_BASE_URL}/api/auth/register` 
      : `${BACKEND_BASE_URL}/api/auth/login`;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      let data = {};
      const textData = await res.text();
      if (textData) {
        data = JSON.parse(textData);
      }

      if (res.status !== 200 && res.status !== 201) {
        throw new Error(data.message || 'Authentication failed. Please try again.');
      }

      if (isSignup) {
        setMessage("Account created successfully! Please sign in. 🎉");
        setIsSignup(false);
        setFormData({ name: '', email: '', password: '' });
      } else {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('name', data.name);

        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
        window.location.reload();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-32 pb-16 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-center">
      <div className="bg-[#141414] border border-[#D4AF37]/20 p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-serif-lux text-[#D4AF37] text-center uppercase tracking-widest mb-6">
          {isSignup ? "Create Account" : "Luxury Login"}
        </h2>

        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded mb-4 text-center">{error}</div>}
        {message && <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs p-3 rounded mb-4 text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="text-[10px] tracking-widest text-gray-400 uppercase block mb-1">Full Name</label>
              <input type="text" name="name" value={formData.name} required onChange={handleChange} className="w-full bg-black border border-gray-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
            </div>
          )}
          <div>
            <label className="text-[10px] tracking-widest text-gray-400 uppercase block mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} required onChange={handleChange} className="w-full bg-black border border-gray-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
          </div>
          <div>
            <label className="text-[10px] tracking-widest text-gray-400 uppercase block mb-1">Password</label>
            <input type="password" name="password" value={formData.password} required onChange={handleChange} className="w-full bg-black border border-gray-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
          </div>
          <button type="submit" className="w-full bg-[#E2B842] text-black font-bold py-3 rounded text-xs uppercase tracking-widest mt-2 hover:bg-white transition duration-300">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center text-xs text-gray-500 mt-6">
          {isSignup ? "Already have an account?" : "New to Mandar Inn?"}
          <button type="button" onClick={() => { setIsSignup(!isSignup); setError(''); setMessage(''); }} className="text-[#D4AF37] underline font-semibold focus:outline-none ml-1">
            {isSignup ? "Login here" : "Create one here"}
          </button>
        </p>
      </div>
    </div>
  );
}