import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 py-8 text-center text-xs text-gray-500 tracking-wide mt-auto">
      <p>&copy; 2026 Rajbir's Mandar Inn. All Luxury Rights Reserved.</p>
      
      {/* 🌟 YAHAN AAPKA DETAILS HAI 🌟 */}
      <p className="text-gray-400 mt-2 text-[11px]">
        Designed & Developed by{' '}
        <a 
          href="https://wa.me/919205849199" // 👈 Yahan apna WhatsApp link ya Portfolio link daal sakte hain
          target="_blank" 
          rel="noreferrer" 
          className="text-[#E2B842] font-semibold hover:underline tracking-widest uppercase"
        >
          [JAY KISHOR] {/* 👈 Yahan apna real naam likhein */}
        </a>
      </p>
    </footer>
  );
}