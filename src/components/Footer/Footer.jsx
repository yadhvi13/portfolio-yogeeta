import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#5C1311] text-brand-cream select-none">
      
      {/* 1. UPPER NAV ROW */}
      <div className="border-t border-white/10 py-16 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start w-full md:w-auto">
            <h2 className="text-3xl font-display font-black text-brand-cream tracking-tight">
              YOGEETA
            </h2>
            <p className="text-brand-cream/70 mt-2 max-w-sm text-sm sm:text-base font-semibold leading-relaxed text-center md:text-left">
              Full-stack developer building scalable web applications and intuitive interfaces.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-brand-cream/80 font-sans font-extrabold text-xs tracking-widest w-full md:w-auto">
            {[
              { label: "ABOUT", id: "about" },
              { label: "SERVICES", id: "about" },
              { label: "SKILLS", id: "skills" },
              { label: "EXPERIENCE", id: "experience" },
              { label: "PROJECTS", id: "work" },
              { label: "EDUCATION", id: "education" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-brand-gold transition-colors text-left uppercase cursor-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 text-brand-cream text-xl w-full md:w-auto">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yogeeta-752388331/" },
              { icon: <FaGithub />, link: "https://github.com/yadhvi13" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-dark hover:bg-brand-gold transition-all border border-white/10 p-2.5 bg-white/5 rounded-full shadow-md cursor-none"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. LOWER STRIP */}
      <div className="border-t border-white/5 pt-6 pb-24 md:pb-6 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Text */}
          <div className="font-sans font-semibold text-xs tracking-wider uppercase text-brand-cream/50 text-center md:text-left leading-normal">
            PASSIONATE ABOUT DEVELOPMENT. FOCUSED ON RESULTS. <span className="mx-2 text-white/20">|</span> AVAILABLE FOR COLLABORATION
          </div>

          {/* Right Button badge */}
          <a
            href="#contact"
            className="bg-brand-gold text-brand-dark font-sans font-extrabold text-xs tracking-wider px-5 py-2.5 rounded-full shadow-lg hover:bg-[#c59f2a] transition-all flex items-center gap-2 cursor-none select-none"
          >
            <span>LET'S WORK TOGETHER!</span>
            {/* Spinning Star Asterisk */}
            <span className="text-brand-crimson font-black animate-spin-slow">★</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
