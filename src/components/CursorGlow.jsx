import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const cursorSize = 28;
  const offset = cursorSize / 2;
  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);
  const ringX = useMotionValue(-1000);
  const ringY = useMotionValue(-1000);
  const springConfig = { damping: 28, stiffness: 340 };
  const springX = useSpring(ringX, springConfig);
  const springY = useSpring(ringY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const handleMouseMove = (event) => {
      rawMouseX.set(event.clientX);
      rawMouseY.set(event.clientY);
      ringX.set(event.clientX - offset);
      ringY.set(event.clientY - offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY, ringX, ringY, shouldReduceMotion]);

  const background = useMotionTemplate`radial-gradient(360px circle at ${rawMouseX}px ${rawMouseY}px, rgba(56, 189, 248, 0.24), rgba(56, 189, 248, 0.10) 30%, rgba(15, 23, 42, 0) 75%)`;

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
        style={{ background }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block fixed top-0 left-0 rounded-full border border-sky-400/80 shadow-[0_0_20px_rgba(56,189,248,0.35)] bg-sky-400/10 z-10"
        style={{ x: springX, y: springY, width: cursorSize, height: cursorSize }}
      />
    </>
  );
}

export default CursorGlow;
