import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
export default function CursorBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 80);
      mouseY.set(e.clientY - 80);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);
  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      className=" fixed top-0 left-0 z-999 w-40 h-40 rounded-full bg-pink-300/40 blur-3xl pointer-events-none "
    />
  );
}
