import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 lg:px-20 py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
          }}
        >
          <div
            className="
              bg-yellow-300
              border-4
              border-black
              rounded-[40px]
              p-6
              shadow-[12px_12px_0px_black]
            "
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Developer"
              alt="about"
              className="w-full rounded-[30px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
          }}
        >
          <span
            className="
              inline-block
              px-4
              py-2
              bg-pink-300
              border-4
              border-black
              rounded-xl
              shadow-[6px_6px_0px_black]
              font-black
            "
          >
            ABOUT ME
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Building playful interfaces with motion and brutalist aesthetics.
          </h2>

          <p className="mt-8 text-lg font-semibold leading-relaxed">
            I'm a frontend developer focused on creating immersive digital
            experiences with React, Framer Motion, and modern interaction
            systems. I love combining bold visual styles with smooth animation
            to make interfaces feel alive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
