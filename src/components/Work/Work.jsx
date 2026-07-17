import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showReadMore = project.description.length > 90;
  const displayDesc = isExpanded
    ? project.description
    : showReadMore
    ? project.description.slice(0, 90) + "..."
    : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group glass-card-light p-5 rounded-2xl shadow-lg border border-white/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative z-10"
    >
      {/* Image Container */}
      <div className="relative rounded-xl overflow-hidden border border-brand-dark/10 bg-brand-crimson/5 aspect-[16/10] mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 md:grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-display font-black text-xl text-brand-crimson tracking-wide uppercase mb-1">
            {project.title}
          </h3>
          
          {/* Category / Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-extrabold tracking-wider uppercase bg-brand-gold/15 text-brand-crimson px-2.5 py-0.5 border border-brand-gold/25 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Short description with read more toggle */}
          <p className="font-sans text-xs sm:text-sm text-brand-dark/85 leading-relaxed mb-6">
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
        </div>

        {/* Action Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-brand-dark/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-extrabold text-xs text-brand-crimson hover:text-brand-gold transition-colors flex items-center gap-1 cursor-none"
          >
            <span>VIEW CODE</span>
            <span>↗</span>
          </a>

          <a
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-brand-crimson hover:bg-brand-gold text-brand-cream hover:text-brand-dark flex items-center justify-center shadow-md hover:scale-105 transition-all cursor-none"
          >
            <span className="text-base font-bold">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section
      id="work"
      className="relative pt-20 pb-28 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] bg-brand-sand text-brand-dark overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-12 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[90px] pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col items-center mb-16 relative z-10">
        <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-brand-crimson uppercase text-center">
          SELECTED WORK
        </h2>
        <div className="w-20 h-[3px] bg-brand-gold mt-4 rounded-full" />
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* 3. FLUID WAVY SEPARATOR BOTTOM (filled with brand-cream) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path className="text-brand-cream" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,154.06,44.76,226.74,74,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Work;
