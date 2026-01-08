
// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={`fixed top-0 w-full z-50 px-[7vw] lg:px-[18vw]
//       ${
//         isScrolled
//           ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-10px_rgba(130,69,236,0.4)]"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="flex justify-between items-center py-5 text-white">

//         {/* LOGO */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="text-lg font-semibold cursor-pointer select-none"
//         >
//           <span className="text-[#8245ec]">&lt;</span>
//           Yogeeta
//           <span className="text-[#8245ec]">/</span>
//           Developer
//           <span className="text-[#8245ec]">&gt;</span>
//         </motion.div>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex space-x-10 text-gray-300 relative">
//           {menuItems.map((item) => (
//             <li key={item.id} className="relative">
//               <button
//                 onClick={() => handleMenuItemClick(item.id)}
//                 className="hover:text-white transition"
//               >
//                 {item.label}
//               </button>

//               {/* Active underline */}
//               {activeSection === item.id && (
//                 <motion.span
//                   layoutId="activeLink"
//                   className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
//                 />
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* SOCIAL ICONS */}
//         <div className="hidden md:flex space-x-4">
//           {[FaGithub, FaLinkedin].map((Icon, i) => (
//             <motion.a
//               key={i}
//               whileHover={{ y: -3, scale: 1.15 }}
//               href={
//                 i === 0
//                   ? "https://github.com/yadhvi13"
//                   : "https://www.linkedin.com/in/yogeeta-752388331/"
//               }
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-[#8245ec]"
//             >
//               <Icon size={22} />
//             </motion.a>
//           ))}
//         </div>

//         {/* MOBILE ICON */}
//         <div className="md:hidden">
//           <motion.div
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsOpen(!isOpen)}
//             className="cursor-pointer text-[#8245ec]"
//           >
//             {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//           </motion.div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden absolute left-1/2 -translate-x-1/2 w-[90%]
//             bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10
//             shadow-[0_20px_60px_-10px_rgba(130,69,236,0.5)]"
//           >
//             <ul className="flex flex-col items-center gap-6 py-6 text-gray-200">
//               {menuItems.map((item) => (
//                 <motion.li
//                   key={item.id}
//                   whileHover={{ scale: 1.1 }}
//                   onClick={() => handleMenuItemClick(item.id)}
//                   className="cursor-pointer"
//                 >
//                   {item.label}
//                 </motion.li>
//               ))}

//               <div className="flex gap-6 pt-2">
//                 <FaGithub size={22} />
//                 <FaLinkedin size={22} />
//               </div>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const { scrollYProgress } = useScroll();

  const clickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.15;
    audio.play();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    clickSound();
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 z-[60] origin-left"
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={(e) => {
          setMouseX(e.clientX);
          setMouseY(e.clientY);
        }}
        className={`fixed top-0 w-full z-50 px-[7vw] lg:px-[18vw]
        ${
          isScrolled
            ? "bg-white/5 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* CURSOR GLOW */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(130,69,236,0.15), transparent 60%)`,
          }}
        />

        {/* GLASS NOISE */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="relative flex justify-between items-center py-5 text-white">
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            onClick={clickSound}
            className="text-lg font-semibold cursor-pointer select-none"
          >
            <span className="text-[#8245ec]">&lt;</span>
            Yogeeta
            <span className="text-[#8245ec]">/</span>
            Developer
            <span className="text-[#8245ec]">&gt;</span>
          </motion.div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-10 text-gray-300 relative">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="hover:text-white transition"
                >
                  {item.label}
                </button>

                {activeSection === item.id && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* SOCIALS */}
          <div className="hidden md:flex space-x-5">
            {[FaGithub, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, scale: 1.2 }}
                onClick={clickSound}
                href={
                  i === 0
                    ? "https://github.com/yadhvi13"
                    : "https://www.linkedin.com/in/yogeeta-752388331/"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* MOBILE ICON */}
          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                clickSound();
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer text-[#8245ec]"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="md:hidden absolute left-1/2 -translate-x-1/2 w-[90%]
              bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/10
              shadow-[0_20px_70px_-10px_rgba(130,69,236,0.55)]"
            >
              <ul className="flex flex-col items-center gap-6 py-6 text-gray-200">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleMenuItemClick(item.id)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </motion.li>
                ))}

                <div className="flex gap-6 pt-2">
                  <FaGithub size={22} />
                  <FaLinkedin size={22} />
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
