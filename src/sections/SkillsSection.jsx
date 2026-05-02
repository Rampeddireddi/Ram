import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function SkillsSection({ skills }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const sectionScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const sectionScale = useSpring(shouldReduceMotion ? 1 : sectionScaleRaw, {
    stiffness: 130,
    damping: 24,
    mass: 0.45,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: sectionScale }}
    >
      <h2 className="text-2xl font-semibold text-white">Skills</h2>
      <motion.div
        className="mt-5 flex flex-wrap gap-3"
        variants={shouldReduceMotion ? undefined : listVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="rounded-full border border-cyan-300/25 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100"
            variants={shouldReduceMotion ? undefined : itemVariants}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default SkillsSection;
