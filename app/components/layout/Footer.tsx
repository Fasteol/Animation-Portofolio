import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="overflow-hidden pt-24 pb-10">
      {" "}
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {" "}
        <h1 className="text-[120px] font-black">
          {" "}
          LET'S BUILD SOMETHING AWESOME — LET'S BUILD SOMETHING AWESOME —{" "}
        </h1>{" "}
      </motion.div>{" "}
    </footer>
  );
}
