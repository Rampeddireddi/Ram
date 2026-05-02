import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.14), rgba(14, 165, 233, 0.06) 35%, rgba(15, 23, 42, 0) 70%)`;

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{ background }}
    />
  );
}

export default CursorGlow;
