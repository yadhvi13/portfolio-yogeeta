
import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-32 px-[12vw] md:px-[7vw] lg:px-[16vw]"
    >
      {/* 🌈 Soft academic glow */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/20 blur-[160px]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          Education
        </h2>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          A structured journey of learning, discipline, and continuous
          intellectual growth.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative z-10">
        {/* Vertical academic spine */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-indigo-500/0 via-indigo-400 to-indigo-500/0" />

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative mb-24 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* 🎓 Timeline Medal */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full
              bg-white/10 backdrop-blur-xl border border-white/30
              shadow-[0_0_30px_rgba(99,102,241,0.6)]
              flex items-center justify-center z-20"
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 rounded-full object-cover"
              />
            </motion.div>

            {/* 💎 EDUCATION CARD */}
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`relative w-full sm:max-w-xl p-8 rounded-3xl
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_30px_80px_-15px_rgba(99,102,241,0.5)]
              ${
                index % 2 === 0 ? "sm:ml-[52%]" : "sm:mr-[52%]"
              }`}
            >
              {/* Gradient sweep */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition duration-700 blur-xl" />

              {/* Header */}
              <div className="flex items-center gap-6 mb-6 relative">
                <div className="w-20 h-14 rounded-xl overflow-hidden bg-white">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300">{edu.school}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade Badge */}
              <div className="inline-block mb-4 px-4 py-1 rounded-full
                bg-white/10 border border-white/20 text-indigo-300 text-sm font-medium">
                Grade: {edu.grade}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {edu.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
