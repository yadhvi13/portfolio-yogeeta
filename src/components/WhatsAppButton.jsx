import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces, e.g., 919876543210 for India)
  const phoneNumber = "918744092297"; // Placeholder
  const message = "Hi Yogeeta, I loved your portfolio! Let's connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group cursor-none flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Liquid Glow Underlay */}
      <span className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all duration-1000 group-hover:bg-[position:-100%_0,0_0] z-20 mix-blend-overlay rounded-full pointer-events-none" />
      
      {/* Pulsing Fierce Glow */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-300 pointer-events-none" />
      
      {/* Button Surface */}
      <span className="absolute inset-0 w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-emerald-600 to-teal-700 shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.9)] border border-green-300/30">
        <FaWhatsapp className="text-white text-3xl md:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-20 md:right-24 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_10px_30px_rgba(16,185,129,0.3)] whitespace-nowrap">
        Let's Chat! 🔥
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
