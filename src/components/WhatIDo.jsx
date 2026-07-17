import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "FRONTEND DEV",
    desc: "Clean, responsive, interactive user interfaces built with React & Next.js.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "BACKEND DEV",
    desc: "Robust APIs, secure database models, and efficient Node/Express services.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-13.5-6h13.5m-13.5-3h13.5m-16.5 12h19.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0019.5 3H4.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21z" />
      </svg>
    ),
  },
  {
    title: "UI/UX DESIGN",
    desc: "User-centered design wireframes and seamless navigation prototypes.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "CLEAN CODING",
    desc: "Optimized software structures, robust patterns, and clean codebases.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
];

const WhatIDo = () => {
  return (
    <section className="relative bg-brand-sand text-brand-dark pt-20 pb-28 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] overflow-hidden select-none">
      {/* Background shapes */}
      <div className="absolute top-10 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-crimson/5 blur-[80px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 relative z-10">
        
        {/* Left Side: WHAT I DO vertical heading */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between items-start">
          <div>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tight leading-none text-brand-crimson">
              WHAT <br /> I DO
            </h2>
            <div className="w-20 h-[3px] bg-brand-gold mt-4 rounded-full" />
          </div>

          {/* Rotating badge inside the WHAT I DO section */}
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center w-36 h-36 rounded-full bg-brand-crimson border border-brand-gold/30 shadow-xl rotate-[8deg] group hover:scale-105 transition-transform duration-300">
            <svg className="w-28 h-28 text-brand-cream animate-spin-slow absolute" viewBox="0 0 100 100">
              <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text fontFamily="Plus Jakarta Sans" fontSize="10" fontWeight="800" fill="currentColor">
                <textPath xlinkHref="#badgePath">CLEAN CODE • GOOD SYSTEMS • </textPath>
              </text>
            </svg>
            <span className="text-brand-gold text-2xl">💛</span>
          </div>
        </div>

        {/* Right Side: 4 columns list in glassmorphism cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass-card-light p-6 rounded-2xl shadow-md border border-white/40 flex flex-col items-start transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-crimson flex items-center justify-center mb-6 shadow-md border border-brand-gold/20">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-xl text-brand-crimson mb-3 tracking-wide">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-brand-dark/95 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. FLUID WAVY SEPARATOR BOTTOM (filled with brand-cream) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path className="text-brand-cream" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,154.06,44.76,226.74,74,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default WhatIDo;
