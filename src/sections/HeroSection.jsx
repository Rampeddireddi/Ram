import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import codeSnippetBg from "../assets/backgrounds/code-snippet-bg.png";

function HeroSection({ data }) {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -40]);
  const parallaxX = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 22]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 px-7 py-10 shadow-2xl shadow-cyan-950/20 sm:px-10 lg:flex lg:h-[calc(100vh-4rem)] lg:flex-col lg:justify-between"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
        style={{ y: parallaxY }}
      />
      <motion.img
        aria-hidden="true"
        src={codeSnippetBg}
        alt=""
        className="pointer-events-none absolute -right-20 -top-8 w-[480px] max-w-none opacity-30 mix-blend-screen"
        style={{ y: parallaxY, x: parallaxX }}
      />
      <div>
        <p className="relative inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          Portfolio
        </p>
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          {data.name}
        </motion.h1>
        <p className="relative mt-3 text-lg text-slate-300">{data.role}</p>
        <p className="relative mt-5 max-w-lg leading-relaxed text-slate-300">{data.about}</p>
        <nav className="relative mt-9 hidden lg:block">
          <ul className="space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-3 transition hover:text-cyan-300"
                >
                  <span className="h-px w-8 bg-slate-500" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative mt-8 flex flex-wrap items-center gap-3 lg:mt-6">
        <a
          href="#projects"
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          View Projects
        </a>
        <a
          href={data.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          Open Resume
        </a>
        <a
          href={data.contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-300 transition hover:text-cyan-300"
        >
          GitHub
        </a>
        <a
          href={data.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-300 transition hover:text-cyan-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
