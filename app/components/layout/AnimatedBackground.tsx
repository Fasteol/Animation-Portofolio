import { motion } from "framer-motion";
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {" "}
      {/* BIG FLOATING BLOB */}{" "}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className=" absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-300 opacity-40 blur-3xl "
      />{" "}
      {/* SECOND BLOB */}{" "}
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 40, -30, 0],
          rotate: [0, -20, 20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className=" absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-300 opacity-30 blur-3xl "
      />{" "}
      {/* YELLOW LIGHT */}{" "}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-yellow-300 opacity-20 blur-3xl "
      />{" "}
      {/* FLOATING STAR */}{" "}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 180] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className=" absolute top-40 right-40 "
      >
        {" "}
        <svg width="80" height="80" viewBox="0 0 200 200" fill="none">
          {" "}
          <path
            d="M100 0L122 78L200 100L122 122L100 200L78 122L0 100L78 78L100 0Z"
            fill="#FFD93D"
            stroke="black"
            strokeWidth="8"
          />{" "}
        </svg>{" "}
      </motion.div>{" "}
      {/* DOODLE CIRCLE */}{" "}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className=" absolute bottom-20 left-20 "
      >
        {" "}
        <svg width="140" height="140" viewBox="0 0 200 200">
          {" "}
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="black"
            strokeWidth="8"
            strokeDasharray="12 18"
            fill="none"
          />{" "}
        </svg>{" "}
      </motion.div>{" "}
      {/* FLOATING SQUARE */}{" "}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className=" absolute top-[70%] left-[30%] w-20 h-20 bg-green-300 border-4 border-black rounded-2xl "
      />{" "}
      {/* FLOATING TRIANGLE */}{" "}
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className=" absolute top-[20%] left-[60%] "
      >
        {" "}
        <svg width="120" height="120" viewBox="0 0 200 200">
          {" "}
          <polygon
            points="100,0 200,200 0,200"
            fill="#A7F3D0"
            stroke="black"
            strokeWidth="8"
          />{" "}
        </svg>{" "}
      </motion.div>{" "}
    </div>
  );
}
