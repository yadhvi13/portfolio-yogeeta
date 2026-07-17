import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const getCategoryStyles = (categoryTitle) => {
  switch (categoryTitle.toLowerCase()) {
    case "frontend":
      return {
        badgeBg: "bg-brand-gold/15 hover:bg-brand-gold/25 border-brand-gold/30 text-brand-crimson",
      };
    case "backend":
      return {
        badgeBg: "bg-brand-crimson/10 hover:bg-brand-crimson/20 border-brand-crimson/20 text-brand-crimson",
      };
    case "languages":
      return {
        badgeBg: "bg-brand-gold/15 hover:bg-brand-gold/25 border-brand-gold/30 text-brand-crimson",
      };
    case "tools":
    default:
      return {
        badgeBg: "bg-brand-dark/10 hover:bg-brand-dark/20 border-brand-dark/20 text-brand-dark",
      };
  }
};

const SkillCard = ({ category, index }) => {
  const styles = getCategoryStyles(category.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full sm:w-[46%] lg:w-[44%] max-w-[480px] mb-8 z-10"
    >
      <div className="glass-card-light p-6 sm:p-8 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        {/* Title */}
        <h3 className="font-display font-black text-2xl text-brand-crimson pb-4 mb-6 border-b border-brand-dark/10 tracking-wide">
          {category.title.toUpperCase()}
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {category.skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-brand-dark font-extrabold cursor-pointer ${styles.badgeBg} transition-all`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-6 h-6 object-contain"
              />
              <span className="text-xs sm:text-sm font-bold truncate">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 pb-32 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] bg-brand-cream text-brand-dark overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 relative z-10"
    >
      <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-brand-crimson uppercase">
        SKILLS & STACK
      </h2>
      <div className="w-20 h-[3px] bg-brand-gold mx-auto mt-3 rounded-full" />
      <p className="text-brand-dark/80 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-semibold">
        A curated collection of backend tools, databases, front-end stacks, and design systems I specialize in.
      </p>
    </motion.div>

    {/* Skill Cards */}
    <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto relative z-10">
      {SkillsInfo.map((category, index) => (
        <SkillCard key={category.title} category={category} index={index} />
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

export default Skills;
