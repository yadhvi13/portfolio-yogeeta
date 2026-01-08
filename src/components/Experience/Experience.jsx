
import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32 px-[12vw] md:px-[7vw] lg:px-[16vw]"
    >
      {/* 🌈 Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/20 blur-[160px]" />

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          Experience
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          A journey through the roles, responsibilities, and impact I’ve created
          across different organizations.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative z-10">
        {/* 🌟 Animated timeline spine */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500/0 via-purple-400 to-purple-500/0" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-24 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* 🧿 Timeline Node */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full
              bg-white/10 backdrop-blur-xl border border-white/30
              shadow-[0_0_30px_rgba(168,85,247,0.6)]
              flex items-center justify-center z-20"
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-10 h-10 rounded-full object-cover"
              />
            </motion.div>

            {/* 💎 EXPERIENCE CARD */}
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`w-full sm:max-w-xl p-8 rounded-3xl
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_30px_80px_-15px_rgba(168,85,247,0.5)]
              ${
                index % 2 === 0 ? "sm:ml-[52%]" : "sm:mr-[52%]"
              }`}
            >
              {/* Gradient sweep */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition duration-700 blur-xl" />

              {/* Header */}
              <div className="flex items-center gap-5 mb-6 relative">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 relative">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="relative">
                <h5 className="text-white font-semibold mb-3">
                  Tech & Skills
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm
                      bg-white/10 border border-white/20
                      text-gray-200 backdrop-blur-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
