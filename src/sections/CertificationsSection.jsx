import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function CertificationsSection({ certifications, achievements }) {
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
      id="certifications"
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: sectionScale }}
    >
      <h2 className="text-2xl font-semibold text-white">
        Certifications & Achievements
      </h2>

      <div className="mt-6 flex flex-col gap-5">
        {certifications.map((certification, index) => (
          <motion.article
            key={certification.title}
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
                  {certification.title}
                </h3>

                <p className="text-sm text-cyan-300">
                  {certification.issuer}
                </p>
              </div>

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  View Credential
                </a>
              )}
            </div>
          </motion.article>
        ))}

        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
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
            <h3 className="text-lg font-semibold text-white">
              {achievement.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {achievement.description}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default CertificationsSection;