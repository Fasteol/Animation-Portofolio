import { motion } from "framer-motion";

import { staggerContainer } from "~/animations/stagger";
import { cardReveal } from "~/animations/cardReveal";

const timeline = [
  {
    year: "2025",
    title: "Senior Frontend Developer",
  },

  {
    year: "2024",
    title: "UI Motion Designer",
  },

  {
    year: "2023",
    title: "Frontend Freelancer",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 lg:px-20 py-32">
      <motion.h2
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
        }}
        viewport={{
          once: true,
        }}
        className="text-5xl font-black mb-20"
      >
        EXPERIENCE
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="space-y-10"
      >
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            variants={cardReveal}
            whileHover={{
              x: 10,
            }}
            className="
              flex
              items-center
              gap-8
              bg-white
              border-4
              border-black
              rounded-[30px]
              p-8
              shadow-[8px_8px_0px_black]
            "
          >
            <motion.div
              whileHover={{
                rotate: -8,
                scale: 1.1,
              }}
              className="
                text-3xl
                font-black
                bg-yellow-300
                px-6
                py-4
                border-4
                border-black
                rounded-2xl
              "
            >
              {item.year}
            </motion.div>

            <h3 className="text-2xl font-black">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
