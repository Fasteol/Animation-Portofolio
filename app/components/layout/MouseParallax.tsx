import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect } from "react";

export default function MouseParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.03;

      const y = (e.clientY - window.innerHeight / 2) * 0.03;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        fixed
        inset-0
        pointer-events-none
        z-2
      "
    >
      {/* PINK */}
      <div
        className="
          absolute
          top-20
          left-20
          w-100
          h-100
          rounded-full
          bg-pink-300/30
          blur-3xl
        "
      />

      {/* CYAN */}
      <div
        className="
          absolute
          bottom-20
          right-20
          w-87.5
          h-87.5
          rounded-full
          bg-cyan-300/30
          blur-3xl
        "
      />

      {/* YELLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-75
          h-75
          rounded-full
          bg-yellow-300/20
          blur-3xl
        "
      />
    </motion.div>
  );
}
