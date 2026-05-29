import { motion } from "framer-motion";
import { hoverPress } from "~/animations/hoverPress";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div className=" bg-yellow-300 border-4 border-black px-4 py-2 rounded-2xl shadow-[6px_6px_0px_black] font-black ">
          {" "}
          RAZAN.DEV{" "}
        </div>{" "}
        <motion.button
          {...hoverPress}
          className=" bg-cyan-300 border-4 border-black px-5 py-2 rounded-2xl shadow-[6px_6px_0px_black] font-black "
        >
          {" "}
          CONTACT{" "}
        </motion.button>{" "}
      </div>{" "}
    </nav>
  );
}
