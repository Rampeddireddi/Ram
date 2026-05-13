import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function ExperienceSection({ experiences }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const sectionScaleRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.05, 1]
  );

  const sectionScale = useSpring(
    shouldReduceMotion ? 1 : sectionScaleRaw,
    {
      stiffness: 130,
      damping: 24,
      mass: 0.45,
    }
  );

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: sectionScale }}
    >
      <h2 className="text-2xl font-semibold text-white">Experience</h2>

      <div className="mt-6 flex flex-col gap-5">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className="rounded-xl border border-white/10 bg-slate-950/60 p-6"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                    x: index % 2 === 0 ? -14 : 14,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: shouldReduceMotion ? 0 : index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="text-sm text-cyan-300">
                  {experience.company}
                </p>
              </div>

              <div className="text-sm text-slate-400 md:text-right">
                <p>{experience.duration}</p>
                <p>{experience.location}</p>
              </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default ExperienceSection;