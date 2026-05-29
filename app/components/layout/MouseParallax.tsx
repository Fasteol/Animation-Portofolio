import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseParallax() {
  // Parallax: relative offset from screen center, scaled down
  const parallaxRawX = useMotionValue(0);
  const parallaxRawY = useMotionValue(0);
  const smoothX = useSpring(parallaxRawX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(parallaxRawY, { stiffness: 40, damping: 20 });

  // Cursor blob: absolute pixel position, offset by half the blob size
  const cursorRawX = useMotionValue(0);
  const cursorRawY = useMotionValue(0);
  const springX = useSpring(cursorRawX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorRawY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      parallaxRawX.set((e.clientX - window.innerWidth / 2) * 0.03);
      parallaxRawY.set((e.clientY - window.innerHeight / 2) * 0.03);
      cursorRawX.set(e.clientX - 80);
      cursorRawY.set(e.clientY - 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [parallaxRawX, parallaxRawY, cursorRawX, cursorRawY]);

  return (
    <>
      {/* Parallax background blobs */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed inset-0 pointer-events-none z-2"
      >
        <div className="absolute top-20 left-20 w-100 h-100 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-87.5 h-87.5 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 rounded-full bg-yellow-300/20 blur-3xl" />
      </motion.div>

      {/* Cursor glow blob */}
      <motion.div
        style={{ translateX: springX, translateY: springY }}
        className="fixed top-0 left-0 z-999 w-40 h-40 rounded-full bg-pink-300/40 blur-3xl pointer-events-none"
      />
    </>
  );
}
