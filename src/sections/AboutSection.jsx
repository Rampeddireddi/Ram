import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import distributedSystemsBg from "../assets/backgrounds/distributed-systems-bg.png";

function AboutSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -28]);
  const sectionScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const sectionScale = useSpring(shouldReduceMotion ? 1 : sectionScaleRaw, {
    stiffness: 130,
    damping: 24,
    mass: 0.45,
  });

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ scale: sectionScale }}
    >
      <motion.img
        aria-hidden="true"
        src={distributedSystemsBg}
        alt=""
        className="pointer-events-none absolute -left-20 top-0 w-[520px] max-w-none opacity-30 mix-blend-screen"
        style={{ y: parallaxY }}
      />
      <h2 className="relative text-2xl font-semibold text-white">About Me</h2>
      <p className="relative mt-4 max-w-4xl leading-relaxed text-slate-300">
      I build full-stack SaaS applications and backend systems using Django, Node.js, React, 
      PostgreSQL, Redis, and Docker. I'm particularly interested in distributed systems, system design, 
      and scalable software architecture.
      </p>
    </motion.section>
  );
}

export default AboutSection;
