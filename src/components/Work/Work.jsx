
import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project, index, setActiveProject }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`flex flex-col lg:flex-row ${
        index % 2 === 0 ? "" : "lg:flex-row-reverse"
      } gap-14 items-center relative group`}
    >
      {/* Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[3rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x + 32}px ${mousePosition.y + 32}px, rgba(236,72,153,0.15), transparent 40%)`,
        }}
      />

      {/* IMAGE (BIG & WIDE) */}
      <div className="w-full lg:w-[58%] relative z-10">
        <div
          onClick={() => setActiveProject(project)}
          className="relative cursor-pointer rounded-3xl overflow-hidden
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-[0_30px_90px_-20px_rgba(168,85,247,0.55)]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] lg:h-[380px] object-cover hover:scale-110 transition duration-700"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-[42%] relative z-10">
        <h3 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full
              bg-white/10 border border-white/20 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl
            bg-white/10 border border-white/20
            text-white hover:bg-white/20 transition cursor-none"
          >
            View Code
          </a>
          
          <motion.a
            whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl
            text-white font-bold overflow-hidden group/btn cursor-none"
          >
            <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all duration-1000 group-hover/btn:bg-[position:-100%_0,0_0] z-20 mix-blend-overlay pointer-events-none" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 blur-md opacity-80 group-hover/btn:opacity-100 animate-pulse transition-opacity duration-300" />
            <span className="relative z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.5)] group-hover/btn:shadow-[0_0_30px_rgba(236,72,153,0.9)] transition-all duration-300">
              View Live
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-32 px-4 sm:px-8 md:px-[7vw] lg:px-[12vw]"
    >
      {/* Soft ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 blur-[160px]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white">
          Selected Projects
        </h2>
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
          Real-world applications I’ve designed and built — focusing on
          performance, scalability, and clean user experience.
        </p>
      </motion.div>

      {/* PROJECT LIST */}
      <div className="flex flex-col gap-24 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} setActiveProject={setActiveProject} />
        ))}
      </div>

      {/* MODAL (OPTIONAL DETAIL VIEW) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl
            flex items-center justify-center px-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 40 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-3xl
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              shadow-[0_40px_120px_-20px_rgba(168,85,247,0.7)]
              p-8"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-6 text-4xl text-white"
              >
                ×
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full rounded-2xl mb-6"
              />

              <h3 className="text-3xl font-bold text-white mb-4">
                {activeProject.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {activeProject.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
