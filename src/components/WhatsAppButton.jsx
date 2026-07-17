import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (include country code, no + or spaces, e.g., 919876543210 for India)
  const phoneNumber = "918744092297"; // Placeholder
  const message = "Hi Yogeeta, I loved your portfolio! Let's connect.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

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
      {/* Button Surface */}
      <span className="absolute inset-0 w-full h-full flex items-center justify-center rounded-full bg-[#25D366] border border-white/25 shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] transition-all">
        <FaWhatsapp className="text-white text-3xl md:text-4xl" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-20 md:right-24 px-4 py-2 bg-brand-cream/80 backdrop-blur-md text-brand-dark border border-brand-dark/10 rounded-xl font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md whitespace-nowrap">
        Let's Chat! 💬
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
