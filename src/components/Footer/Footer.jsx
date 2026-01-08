// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll function
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
//       <div className="container mx-auto text-center">
//         {/* Name / Logo */}
//         <h2 className="text-xl font-semibold text-purple-500">Tarun Kaushik</h2>

//         {/* Navigation Links - Responsive */}
//         <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             { name: "Experience", id: "experience" },
//             { name: "Projects", id: "projects" },
//             { name: "Education", id: "education" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="hover:text-purple-500 text-sm sm:text-base my-1"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Social Media Icons - Responsive */}
//         <div className="flex flex-wrap justify-center space-x-4 mt-6">
//           {[
//             { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
//             { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09" },
//             { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
//             { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
            
//           ].map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>

//         {/* Copyright Text */}
//         <p className="text-sm text-gray-400 mt-6">
//           © 2025 Tarun Kaushik. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
              { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
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
