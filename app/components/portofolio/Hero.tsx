import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "~/animations/fadeUp";
import { hoverPress } from "~/animations/hoverPress";
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 pt-24 pb-16">
      {" "}
      <div className="w-full grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {" "}
        <motion.div
          style={{ y }}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {" "}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none">
            {" "}
            CREATIVE{" "}
            <span className=" block mt-4 w-fit --rotate-2 bg-yellow-300 px-4 py-2 border-4 border-black shadow-[8px_8px_0px_black] ">
              {" "}
              FRONTEND{" "}
            </span>{" "}
          </h1>{" "}
          <p className="mt-6 text-lg sm:text-xl max-w-lg font-semibold">
            {" "}
            Building immersive interfaces with playful motion, cartoon
            aesthetics, and brutalist UI systems.{" "}
          </p>{" "}
          <motion.button
            {...hoverPress}
            className=" mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-cyan-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_black] text-xl sm:text-2xl font-black "
          >
            {" "}
            VIEW PROJECTS{" "}
          </motion.button>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ rotate: -6, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className=" bg-pink-300 border-4 border-black rounded-[40px] p-6 shadow-[12px_12px_0px_black] "
        >
          <div className="relative">
            <div
              className="
      absolute
      -top-6
      -right-6
      w-full
      h-full
      bg-yellow-300
      border-4
      border-black
      rounded-[40px]
      -z-10
    "
            />
            <motion.img
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Razan"
              alt="profile"
              className="
    w-full
    rounded-[30px]
    bg-white
    p-4
    border-4
    border-black
  "
            />
          </div>
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
