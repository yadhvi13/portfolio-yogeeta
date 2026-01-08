
// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[18vw] font-sans 
    bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8245ec33,transparent_60%)]" />

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14 relative z-10"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
        SKILLS
      </h2>
      <div className="w-28 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-3 rounded-full" />
      <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
        A curated collection of technologies I use to craft modern, scalable, and visually stunning applications
      </p>
    </motion.div>

    {/* Skill Cards */}
    <div className="flex flex-wrap gap-6 justify-between relative z-10">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="w-full sm:w-[48%]"
        >
          <Tilt tiltMaxAngleX={18} tiltMaxAngleY={18} scale={1.05}>
            <div
              className="relative p-8 rounded-3xl border border-white/20
              bg-white/10 backdrop-blur-xl
              shadow-[0_20px_60px_-10px_rgba(130,69,236,0.45)]
              hover:shadow-[0_25px_80px_-10px_rgba(168,85,247,0.65)]
              transition-all duration-500 group"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 relative">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2
                    rounded-full px-4 py-2
                    bg-white/10 backdrop-blur-md
                    border border-white/20
                    hover:border-purple-400/60
                    hover:bg-white/20
                    transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-sm text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
