import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };

  const linkClass = (path) => 
    `transition duration-300 block py-2 lg:py-0 ${location.pathname === path ? 'text-[#D4AF37] font-bold' : 'hover:text-[#D4AF37]'}`;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/95 via-black/80 to-transparent p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="w-12 h-12 border border-[#D4AF37] rounded-br-2xl flex items-center justify-center text-2xl font-bold text-[#D4AF37] bg-black/50">R</div>
          <div>
            <div className="text-sm font-bold tracking-widest text-[#D4AF37] leading-tight font-serif-lux">RAJBIR'S</div>
            <div className="text-xl font-extrabold tracking-wider text-white leading-none font-serif-lux">MANDAR INN</div>
            <div className="text-[9px] tracking-widest text-gray-400 mt-1 uppercase">Banquet Hall For All Occasions</div>
          </div>
        </Link>

        {/* Center Menu Links - Computer Ke Liye */}
        <div className="hidden lg:flex space-x-6 text-xs font-semibold uppercase tracking-widest text-white items-center">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/about" className={linkClass('/about')}>About Us</Link>
          <Link to="/pricing" className={linkClass('/pricing')}>Packages</Link>
          <Link to="/gallery" className={linkClass('/gallery')}>Gallery</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          
          {/* Dashboard link for Desktop */}
          {token && (
            <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="text-[#D4AF37] font-bold border border-[#D4AF37]/40 px-2 py-0.5 rounded ml-2">
              Dashboard
            </Link>
          )}
        </div>

        {/* Right Side Action Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Authentication Dynamic Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {token ? (
              <button 
                onClick={handleLogout} 
                className="text-xs font-bold border border-red-500 text-red-500 px-4 py-2 rounded uppercase tracking-wider hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-xs font-semibold text-white hover:text-[#D4AF37] transition">LOGIN</Link>
                <Link to="/booking" className="bg-[#E2B842] text-black text-xs font-bold px-5 py-3 rounded uppercase tracking-wider hover:bg-white transition duration-300">Book Event</Link>
              </>
            )}
          </div>

          {/* Mobile Book Event Button (Sirf Table/Phone screen par dikhega) */}
          {!token && (
            <Link to="/booking" className="lg:hidden hidden sm:inline-block bg-[#E2B842] text-black text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-white transition">
              Book Event
            </Link>
          )}

          {/* 🍔 Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white focus:outline-none p-2 border border-white/20 rounded"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-b border-[#D4AF37]/20 absolute top-full left-0 w-full p-6 space-y-4 text-sm font-semibold uppercase tracking-widest text-white">
          <Link to="/" className={linkClass('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className={linkClass('/about')} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/pricing" className={linkClass('/pricing')} onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="/gallery" className={linkClass('/gallery')} onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/contact" className={linkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
          
          {token && (
            <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="block text-[#D4AF37] font-bold py-2" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          )}

          {token ? (
            <button 
              onClick={() => { handleLogout(); setIsOpen(false); }} 
              className="w-full text-center border border-red-500 text-red-500 font-bold py-3 rounded mt-4"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block text-center border border-white/40 py-2 rounded text-white" onClick={() => setIsOpen(false)}>LOGIN</Link>
              <Link to="/booking" className="block text-center bg-[#E2B842] text-black font-bold py-3 rounded mt-2" onClick={() => setIsOpen(false)}>Book Event</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}