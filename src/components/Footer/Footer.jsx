


import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative px-[8vw] md:px-[6vw] lg:px-[10vw] py-20">
      
      {/* subtle divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Yogeeta
            </h2>
            <p className="text-gray-400 mt-2 max-w-sm leading-relaxed">
              Full-stack developer crafting modern, scalable and user-centric
              digital experiences.
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col sm:flex-row gap-10 text-gray-400">
            {[
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Experience", id: "experience" },
              { label: "Projects", id: "work" },
              { label: "Education", id: "education" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-white transition text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* SOCIALS */}
          <div className="flex gap-6 text-gray-400 text-xl">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yogeeta-752388331/" },
              { icon: <FaGithub />, link: "https://github.com/yadhvi13" },
              { icon: <FaTwitter />, link: "https://twitter.com/" },
              { icon: <FaYoutube />, link: "https://www.youtube.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="hover:text-white transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-500">
            © 2025 Yogeeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
