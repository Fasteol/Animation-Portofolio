import { motion } from "framer-motion";

import { staggerContainer } from "~/animations/stagger";
import { cardReveal } from "~/animations/cardReveal";

const stats = [
  {
    number: "25+",
    label: "Projects",
  },

  {
    number: "3+",
    label: "Years Experience",
  },

  {
    number: "15+",
    label: "Clients",
  },

  {
    number: "99%",
    label: "Coffee Powered",
  },
];

export default function Stats() {
  return (
    <section className="px-6 lg:px-20 py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            variants={cardReveal}
            whileHover={{
              y: -10,
              rotate: 2,
            }}
            className="
              bg-cyan-300
              border-4
              border-black
              rounded-[30px]
              p-8
              shadow-[8px_8px_0px_black]
              text-center
            "
          >
            <motion.h1
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="text-4xl sm:text-6xl font-black"
            >
              {item.number}
            </motion.h1>

            <p className="mt-4 font-bold text-lg">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
