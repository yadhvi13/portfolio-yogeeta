



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
    setIsOpen(false); // Close menu immediately to unlock document scroll

    // Wait for DOM update/overflow reset before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
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
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-crimson z-[60] origin-left"
      />

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50
        px-4 sm:px-[7vw] lg:px-[18vw]
        transition-all duration-300
        ${isScrolled
            ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-dark/5 py-2 shadow-sm"
            : "bg-transparent py-4"
          }`}
      >
        <div className="flex justify-between items-center py-2 text-brand-dark">
          {/* LOGO */}
          <div
            onClick={clickSound}
            className="flex items-center gap-2 text-xl font-display font-black cursor-pointer text-brand-dark"
          >
            <span className="text-brand-gold text-2xl font-bold animate-spin-slow">★</span>
            <span className="text-brand-crimson tracking-wide">YOGEETA</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-4 text-brand-dark">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`font-sans font-extrabold text-xs tracking-widest uppercase transition-all px-3.5 py-1.5 rounded-full ${
                    activeSection === item.id
                      ? "bg-brand-gold/15 text-brand-crimson"
                      : "hover:bg-brand-dark/5 text-brand-dark/80"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DESKTOP SOCIALS */}
          <div className="hidden md:flex gap-5 text-brand-dark">
            <a
              href="https://github.com/yadhvi13"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-crimson transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yogeeta-752388331/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-crimson transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => {
                clickSound();
                setIsOpen(!isOpen);
              }}
              className="text-brand-dark"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
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
              className="md:hidden overflow-hidden bg-brand-cream/95 backdrop-blur-xl border border-brand-dark/10 rounded-xl mt-2 shadow-lg text-brand-dark"
            >
              <ul className="flex flex-col items-center gap-6 py-6 text-brand-dark">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-sm font-sans font-extrabold cursor-pointer hover:text-brand-crimson px-4 py-1.5 rounded-full ${
                      activeSection === item.id ? "bg-brand-gold/15 text-brand-crimson" : ""
                    }`}
                  >
                    {item.label}
                  </li>
                ))}

                <div className="flex gap-6 pt-4 text-brand-dark border-t border-brand-dark/10 w-full justify-center">
                  <a
                    href="https://github.com/yadhvi13"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-brand-crimson"
                  >
                    <FaGithub size={20}/>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yogeeta-752388331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-brand-crimson"
                  ><FaLinkedin size={20} />
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


