import { motion } from "framer-motion";
import { useMagnetic } from "~/hooks/useMagnetic";
interface Props {
  children: React.ReactNode;
}
export default function MagneticButton({ children }: Props) {
  const { ref, handleMouseMove, reset } = useMagnetic();
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className=" px-8 py-4 bg-yellow-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_black] font-black text-2xl transition-transform "
    >
      {" "}
      {children}{" "}
    </motion.button>
  );
}
