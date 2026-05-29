import { motion } from "framer-motion";
import { floating } from "~/animations/floating";
export default function FloatingShapes() {
  return (
    <>
      {" "}
      <motion.div
        variants={floating}
        animate="animate"
        className=" absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_black] "
      />{" "}
      <motion.div
        variants={floating}
        animate="animate"
        className=" absolute top-[40%] right-20 w-20 h-20 rotate-12 bg-pink-300 border-4 border-black shadow-[8px_8px_0px_black] "
      />{" "}
      <motion.div
        variants={floating}
        animate="animate"
        className=" absolute bottom-20 left-[20%] w-32 h-32 rounded-[30px] bg-green-300 border-4 border-black shadow-[8px_8px_0px_black] "
      />{" "}
    </>
  );
}
