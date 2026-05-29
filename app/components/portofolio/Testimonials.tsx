import { motion } from "framer-motion";

import { floatingLoop } from "~/animations/floatingLoop";

const testimonials = [
  {
    name: "John Doe",
    text: "Amazing developer and motion designer.",
  },

  {
    name: "Sarah Smith",
    text: "Delivered a stunning modern interface.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-20 py-32">
      <motion.h2
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          type: "spring",
        }}
        className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 md:mb-16"
      >
        TESTIMONIALS
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            {...floatingLoop}
            transition={{
              delay: i * 0.2,
            }}
            whileHover={{
              rotate: 2,
              scale: 1.03,
            }}
            className="
              bg-pink-300
              border-4
              border-black
              rounded-[30px]
              p-8
              shadow-[8px_8px_0px_black]
            "
          >
            <p className="text-xl font-bold">"{item.text}"</p>

            <h4 className="mt-6 text-2xl font-black">— {item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
