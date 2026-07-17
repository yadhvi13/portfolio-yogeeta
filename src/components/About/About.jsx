import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import profileImage from "../../assets/yogeeta.jpg";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const targetText = "YOGEETA";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(targetText.slice(0, index + 1));
      index++;
      if (index >= targetText.length) {
        clearInterval(intervalId);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 180);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="about"
      className="relative pt-24 pb-28 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] bg-brand-crimson text-brand-cream overflow-hidden"
    >
      {/* Background Decorative Gold Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] rounded-full bg-brand-gold/10 blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER DECORATIVE BAR */}
      <div className="flex flex-wrap justify-between items-center gap-4 pb-8 mb-12 border-b border-brand-cream/20">
        {/* Left item */}
        <div className="flex items-center gap-2 font-sans font-extrabold text-xs sm:text-sm tracking-widest text-brand-cream">
          {/* Gold Star */}
          <span className="text-brand-gold text-xl animate-spin-slow">★</span>
          <span>FULL STACK & WEB DEVELOPER</span>
        </div>

        {/* Center Badge */}
        <div className="px-4 py-1.5 rounded-full border border-brand-gold/40 font-sans font-extrabold text-xs tracking-widest text-brand-gold bg-[#6A1411]">
          DEVELOPER PORTFOLIO
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-2 font-sans font-extrabold text-xs sm:text-sm tracking-widest text-brand-cream">
          <span>CREATIVE CODE</span>
        </div>
      </div>

      {/* 2. HERO CONTENT GRID */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Column (Typography + Glassmorphism Card) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* HELLO! I'M */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-serif-italic text-brand-gold text-4xl sm:text-5xl md:text-6xl font-normal select-none italic">
              Hello! I'm
            </span>
          </div>

          {/* YOGEETA with Typewriter cursor */}
          <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] text-brand-cream leading-none tracking-tight select-none mb-6 relative">
            {typedText}
            {showCursor && (
              <span className="animate-blink text-brand-gold font-normal font-sans ml-1 text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-none">
                |
              </span>
            )}
            <span className="absolute -right-6 bottom-4 text-brand-gold text-3xl md:text-5xl">+</span>
          </h1>

          {/* Translucent Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl shadow-2xl max-w-md mb-8 select-none"
          >
            <p className="font-sans font-medium text-brand-cream/90 text-sm sm:text-base md:text-lg leading-relaxed">
              I design and build dynamic web applications, coupling robust backend architectures with elegant, fluid frontend interfaces.
            </p>
          </motion.div>

          {/* Location badge */}
          <div className="flex items-center gap-2.5 font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider text-brand-cream/80 mb-8">
            <FiGlobe className="text-lg text-brand-gold animate-pulse" />
            <span>BASED IN FARIDABAD, INDIA</span>
            <span className="text-brand-cream/40">|</span>
            <span className="text-brand-gold">WORKING WORLDWIDE</span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-row gap-3 items-center justify-center lg:justify-start w-full">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1WOF3u7JoT0tZNf_VLy-_C5rr4LXc71cc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-dark font-sans font-extrabold px-3 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-[#c59f2a] transition-all cursor-none text-[10px] sm:text-sm tracking-wider uppercase whitespace-nowrap"
            >
              DOWNLOAD RESUME
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-brand-cream/40 text-brand-cream hover:bg-white/5 font-sans font-extrabold px-3 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all cursor-none text-[10px] sm:text-sm tracking-wider uppercase whitespace-nowrap"
            >
              LET'S TALK
            </motion.a>
          </div>
        </div>

        {/* Right Column (Rounded Crop inside Gold Dashed Ring) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative py-12">
          {/* Profile photo crop */}
          <div className="relative">
            {/* Outer dashed spinning ring */}
            <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-brand-gold/50 animate-spin-slow pointer-events-none" />

            {/* Main Picture Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-[4px] border-brand-gold shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-brand-dark"
            >
              <img
                src={profileImage}
                alt="Yogeeta"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Floating gold leaf/particle decorations (SVG) */}
          <svg className="w-8 h-8 text-brand-gold/60 absolute top-8 right-16 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.39 8.26L21 9.27L16.2 13.97L17.33 20.5L12 17.27L6.67 20.5L7.8 13.97L3 9.27L9.61 8.26L12 2Z" />
          </svg>
          <svg className="w-6 h-6 text-brand-gold/40 absolute bottom-12 left-12 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.39 8.26L21 9.27L16.2 13.97L17.33 20.5L12 17.27L6.67 20.5L7.8 13.97L3 9.27L9.61 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      {/* 3. FLUID WAVY SEPARATOR BOTTOM (filled with brand-sand) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[50px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path className="text-brand-sand" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,154.06,44.76,226.74,74,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;



