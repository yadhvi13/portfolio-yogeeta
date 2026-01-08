// import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/yogeeta.jpg';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Yogeeta
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <ReactTypingEffect
//               text={[
//                 'Fullstack Developer',
//                 'Web Developer',
//                 'UI/UX Designer',
//                 'Coder',
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => (
//                 <span className="text-[#8245ec]">{cursor}</span>
//               )}
//             />
//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             I am a full-stack developer with over 2 years of experience in
//             building scalable web applications. Skilled in both front-end and
//             back-end development, I specialize in the MERN stack and other
//             modern technologies to create seamless user experiences and
//             efficient solutions.
//           </p>
//           {/* Resume Button */}
//           <a
//             href="https://drive.google.com/file/d/1qt804WU_jXdQWWBBao2hHxx6olSzuSOX/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//               boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//             }}
//           >
//             DOWNLOAD RESUME
//           </a>
          
//         </div>
//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="yogeeta"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/yogeeta.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-20 md:mt-28 lg:mt-36"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Hi, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-purple-300 to-white"
          >
            Yogeeta
          </motion.h2>

          {/* Typing */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
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
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/file/d/1qt804WU_jXdQWWBBao2hHxx6olSzuSOX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block mt-10 px-10 py-4 rounded-full
            text-white font-bold text-lg overflow-hidden"
          >
            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 blur-xl opacity-70" />
            {/* Button */}
            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-4 rounded-full">
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
            rounded-full bg-purple-600/20 blur-[120px]" />

          <Tilt
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[30rem] md:h-[30rem]
            rounded-full border-4 border-purple-600"
          >
            <img
              src={profileImage}
              alt="Yogeeta"
              className="w-full h-full rounded-full object-cover
              shadow-[0_20px_50px_rgba(130,69,236,0.6)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
