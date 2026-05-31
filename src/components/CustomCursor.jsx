import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen hidden md:flex"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(236, 72, 153, 0.2)" : "rgba(168, 85, 247, 0.3)",
        border: isHovering ? "1px solid rgba(236, 72, 153, 0.8)" : "1px solid rgba(168, 85, 247, 0.5)",
        boxShadow: isHovering
          ? "0 0 30px 5px rgba(236, 72, 153, 0.5)"
          : "0 0 15px 2px rgba(168, 85, 247, 0.5)",
      }}
      transition={{ type: "tween", duration: 0.15 }}
    >
      <div className="w-2 h-2 bg-white rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
