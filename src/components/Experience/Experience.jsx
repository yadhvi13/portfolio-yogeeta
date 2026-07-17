import React, { useState } from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showReadMore = exp.desc.length > 110;
  const displayDesc = isExpanded
    ? exp.desc
    : showReadMore
    ? exp.desc.slice(0, 110) + "..."
    : exp.desc;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`relative ml-16 md:ml-0 w-full md:w-[45%] p-6 rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md shadow-lg hover:shadow-xl transition-all`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden border border-brand-dark/10 bg-white flex-shrink-0 flex items-center justify-center">
          <img
            src={exp.img}
            alt={exp.company}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-display font-extrabold text-brand-crimson leading-snug">
            {exp.role}
          </h3>
          <p className="text-sm font-bold text-brand-dark/70">
            {exp.company}
          </p>
          
          {/* Date Badge */}
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded border border-brand-gold/40 text-[10px] font-black uppercase tracking-wider bg-brand-gold/15 text-brand-crimson">
            {exp.date}
          </span>
        </div>
      </div>

      {/* Description with read more */}
      <p className="text-xs sm:text-sm text-brand-dark/85 leading-relaxed mb-5 font-sans">
        {displayDesc}
        {showReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-brand-crimson font-extrabold ml-1.5 hover:text-brand-gold transition-colors inline-block cursor-none text-[11px] sm:text-xs"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>

      {/* Skills */}
      <div>
        <h5 className="text-xs font-sans font-black text-brand-crimson uppercase tracking-wider mb-2">
          Skills:
        </h5>
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full border border-brand-dark/10 text-[10px] font-extrabold uppercase bg-brand-gold/10 text-brand-dark"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 pb-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] bg-brand-cream text-brand-dark overflow-hidden"
    >
      {/* Background Canvas Dots */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-brand-gold/5 blur-[90px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-brand-crimson uppercase">
          EXPERIENCE
        </h2>
        <div className="w-20 h-[3px] bg-brand-gold mx-auto mt-3 rounded-full" />
        <p className="text-brand-dark/80 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-semibold">
          A timeline of my professional roles, tech stack exposure, and software engineering internships.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Timeline spine */}
        <div
          className="absolute top-0 h-full left-6 md:left-1/2 w-[2px] -translate-x-1/2 bg-brand-gold/40"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative mb-16 flex w-full justify-start ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Node */}
            <div
              className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-brand-gold bg-brand-cream shadow-md flex items-center justify-center z-20 animate-pulse"
            >
              <img
                src={exp.img}
                alt={exp.company}
                className="w-7 h-7 rounded-full object-cover border border-brand-dark/10"
              />
            </div>

            {/* Experience Card */}
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </div>

      {/* 3. FLUID WAVY SEPARATOR BOTTOM (filled with brand-sand) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path className="text-brand-sand" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,154.06,44.76,226.74,74,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Experience;
