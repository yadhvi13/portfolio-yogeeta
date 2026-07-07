
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/yogeeta.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-8 md:px-[7vw] lg:px-[20vw] mt-20 md:mt-28 lg:mt-36"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left"
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1"
          >
            Hi, I am
            {/* Yogeeta */}
          </motion.h1>

          {/* Name */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 flex
            text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {Array.from("Yogeeta").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -90, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
                }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Typing */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-white">I am a </span>
            <span className="text-orange-500">
              <ReactTypingEffect
                text={[
                  "Fullstack Developer",
                  "Web Developer",
                  "UI/UX Designer",
                  "Coder",
                ]}
                speed={90}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1800}
              />
            </span>
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and modern
            technologies to craft seamless user experiences and efficient,
            reliable solutions.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1WOF3u7JoT0tZNf_VLy-_C5rr4LXc71cc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center mt-10 px-10 py-4 rounded-full
            text-white font-extrabold text-lg overflow-hidden group cursor-none"
          >
            {/* Liquid Glow */}
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all duration-1000 group-hover:bg-[position:-100%_0,0_0] z-20 mix-blend-overlay pointer-events-none" />
            {/* Base Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 blur-xl opacity-80 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            {/* Button Surface */}
            <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-8 py-3 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_40px_rgba(236,72,153,0.9)] transition-all duration-300">
              DOWNLOAD RESUME
            </span>
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center md:justify-end relative"
        >
          {/* Aura ring */}
          <div className="absolute w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem]
            rounded-full bg-orange-600/20 blur-[120px]" />

          <Tilt
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[30rem] md:h-[30rem]
            rounded-full border-4 border-orange-600"
          >
            <img
              src={profileImage}
              alt="Yogeeta"
              className="w-full h-full rounded-full object-cover
              shadow-[0_20px_50px_rgba(249,115,22,0.6)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



