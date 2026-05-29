import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-32">
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
          rotate: -2,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        whileHover={{
          rotate: 1,
        }}
        className="
          bg-yellow-300
          border-4
          border-black
          rounded-[40px]
          p-10
          shadow-[12px_12px_0px_black]
          text-center
        "
      >
        <motion.h2
          animate={{
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black"
        >
          LET'S WORK TOGETHER
        </motion.h2>

        <p className="mt-8 text-xl font-bold">
          Available for freelance projects.
        </p>

        <motion.button
          whileHover={{
            x: 8,
            y: 8,
            boxShadow: "0px 0px 0px black",
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            mt-10
            px-6
            py-3
            sm:px-8
            sm:py-4
            bg-black
            text-white
            border-4
            border-black
            rounded-2xl
            shadow-[8px_8px_0px_black]
            font-black
            text-xl
            sm:text-2xl
          "
        >
          CONTACT ME
        </motion.button>
      </motion.div>
    </section>
  );
}
