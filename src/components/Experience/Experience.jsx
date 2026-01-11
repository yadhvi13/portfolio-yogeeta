

import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden
      py-20 md:py-32
      px-4 sm:px-6 md:px-[7vw] lg:px-[16vw]"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
        w-[600px] md:w-[900px]
        h-[400px] md:h-[500px]
        bg-purple-600/20 blur-[160px]"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16 md:mb-24 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Experience
        </h2>
        <p className="text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          A journey through the roles, responsibilities, and impact I’ve created
          across different organizations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10">
        {/* Timeline spine */}
        <div
          className="
          absolute top-0 h-full
          left-6 md:left-1/2
          w-[2px]
          -translate-x-1/2
          bg-gradient-to-b from-purple-500/0 via-purple-400 to-purple-500/0"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
              relative mb-16 md:mb-24 flex
              justify-start md:${index % 2 === 0 ? "justify-start" : "justify-end"}
            `}
          >
            {/* Timeline Node */}
            <div
              className="
              absolute left-6 md:left-1/2
              -translate-x-1/2
              w-12 h-12 md:w-16 md:h-16
              rounded-full
              bg-white/10 backdrop-blur-xl
              border border-white/30
              shadow-[0_0_30px_rgba(168,85,247,0.6)]
              flex items-center justify-center z-20"
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`
                relative
                ml-16 md:ml-0
                w-full max-w-full sm:max-w-xl
                p-6 md:p-8
                rounded-3xl
                bg-white/10 backdrop-blur-2xl
                border border-white/20
                shadow-[0_30px_80px_-15px_rgba(168,85,247,0.5)]
                ${
                  index % 2 === 0
                    ? "md:ml-[52%]"
                    : "md:mr-[52%]"
                }
              `}
            >
              {/* Gradient hover */}
              <div className="absolute inset-0 rounded-3xl
                bg-gradient-to-r from-purple-500/20 to-pink-500/20
                opacity-0 hover:opacity-100 transition duration-700 blur-xl"
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-5 relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {exp.company}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 relative">
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
                      className="px-3 py-1 rounded-full text-xs md:text-sm
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
