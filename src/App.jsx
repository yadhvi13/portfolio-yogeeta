import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import { useScroll, useTransform, motion } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#050414] text-white cursor-none">
      <CustomCursor />

      {/* Blur Background Parallax */}
      <motion.div style={{ y: backgroundY, position: "absolute", inset: 0, pointerEvents: "none" }}>
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />
        <BlurBlob
          position={{ top: "70%", left: "80%" }}
          size={{ width: "25%", height: "35%" }}
        />
      </motion.div>

      {/* Grid Overlay Parallax */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 pointer-events-none 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
        linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
        bg-[size:14px_24px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <WhatsAppButton />
        <Navbar />
        <About />
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
