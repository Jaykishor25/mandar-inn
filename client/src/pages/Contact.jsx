import React from 'react';

export default function Contact() {
  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-serif-lux text-center text-[#D4AF37] uppercase tracking-widest mb-12">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8 bg-[#141414] p-8 rounded-xl border border-[#D4AF37]/20 shadow-2xl">
        <div className="space-y-6 text-sm">
          <h3 className="text-xl font-bold text-white font-serif-lux tracking-wide">Get In Touch</h3>
          <p className="text-gray-400">Aap kisi bhi event details ya query ke liye hume neeche diye gaye phone number ya address par sampark kar sakte hain.</p>
          <div className="space-y-3 text-xs text-gray-300">
            <p>📞 <b>Phone:</b> +91 1234567890</p>
            <p>✉️ <b>Email:</b> info@rajbirmandarinn.com</p>
            <p>📍 <b>Address:</b> Bounsi,Banka, Bihar, India</p>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }} className="space-y-4 text-xs">
          <input type="text" placeholder="Your Name" required className="w-full p-3 bg-black border border-gray-700 rounded text-white focus:border-[#D4AF37] outline-none" />
          <input type="email" placeholder="Your Email" required className="w-full p-3 bg-black border border-gray-700 rounded text-white focus:border-[#D4AF37] outline-none" />
          <textarea placeholder="Your Message" rows="4" required className="w-full p-3 bg-black border border-gray-700 rounded text-white focus:border-[#D4AF37] outline-none"></textarea>
          <button type="submit" className="w-full bg-[#E2B842] text-black font-bold py-3 rounded uppercase tracking-wider hover:bg-white transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}