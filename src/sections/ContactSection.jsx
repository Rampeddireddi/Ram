import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function ContactSection({ contact }) {
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
      id="contact"
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: sectionScale }}
    >
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-4 text-slate-300">
        Reach out for opportunities and collaboration.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300 hover:text-cyan-200"
        >
          Email
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300 hover:text-cyan-200"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300 hover:text-cyan-200"
        >
          LinkedIn
        </a>
         <a
          href={contact.X}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:border-cyan-300 hover:text-cyan-200"
        >
          X
        </a>
      </div>
    </motion.section>
  );
}

export default ContactSection;
