import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Record visit analytics
    fetch("http://localhost:5000/api/analytics/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: window.location.pathname }),
    }).catch(err => console.error("Analytics error:", err));
  }, []);

  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-brand-cream text-brand-dark cursor-none">
      <CustomCursor />

      {/* Grid Overlay Parallax (Warm Light Canvas - Viewport Fixed) */}
      <motion.div
        style={{ y: gridY }}
        className="fixed inset-x-0 top-0 h-[calc(100vh+150px)] pointer-events-none z-0 
        bg-[radial-gradient(#d5c7b3_1.5px,transparent_1.5px)]
        bg-[size:24px_24px] opacity-25">
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <WhatsAppButton />
        <Navbar />
        <About />
        <WhatIDo />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
