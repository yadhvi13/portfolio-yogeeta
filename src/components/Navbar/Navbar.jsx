



import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  const clickSound = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.15;
    audio.play();
  };

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOCK SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleMenuItemClick = (id) => {
    clickSound();
    setActiveSection(id);

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // Close menu AFTER scroll starts (mobile fix)
    setTimeout(() => {
      setIsOpen(false);
    }, 120);
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
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px]
        bg-gradient-to-r from-orange-500 to-yellow-400
        z-[60] origin-left"
      />

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50
        px-4 sm:px-[7vw] lg:px-[18vw]
        transition-all duration-300
        ${isScrolled
            ? "bg-white/5 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center py-4 text-white">
          {/* LOGO */}
          <div
            onClick={clickSound}
            className="text-lg font-semibold cursor-pointer"
          >
            <span className="text-orange-500">&lt;</span>
            Yogeeta
            <span className="text-orange-500">/</span>
            Developer
            <span className="text-orange-500">&gt;</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="hover:text-white transition"
                >
                  {item.label}
                </button>

                {activeSection === item.id && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full
                  bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP SOCIALS */}
          <div className="hidden md:flex gap-5">
            <a
              href="https://github.com/yadhvi13"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/yogeeta-752388331/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => {
                clickSound();
                setIsOpen(!isOpen);
              }}
              className="text-orange-500"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="md:hidden overflow-hidden
              bg-white/10 backdrop-blur-2xl
              rounded-b-2xl border-t border-white/10"
            >
              <ul className="flex flex-col items-center gap-6 py-8 text-gray-200">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className="text-lg cursor-pointer hover:text-white"
                  >
                    {item.label}
                  </li>
                ))}

                <div className="flex gap-6 pt-4">
                  <a
                    href="https://github.com/yadhvi13"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaGithub size={22}/>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yogeeta-752388331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  ><FaLinkedin size={22} />
                  </a>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;


