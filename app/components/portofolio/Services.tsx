import { motion } from "framer-motion";
import { staggerContainer } from "~/animations/stagger";
import { cardReveal } from "~/animations/cardReveal";
const services = [
  {
    title: "Frontend Development",
    desc: "Modern responsive web apps.",
    color: "bg-yellow-300",
  },
  {
    title: "UI Motion Design",
    desc: "Smooth cinematic interactions.",
    color: "bg-pink-300",
  },
  {
    title: "Design Systems",
    desc: "Scalable reusable architecture.",
    color: "bg-green-300",
  },
];
export default function Services() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-32">
      {" "}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 md:mb-16"
      >
        {" "}
        SERVICES{" "}
      </motion.h2>{" "}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        {" "}
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardReveal}
            whileHover={{ x: 8, y: 8, boxShadow: "0px 0px 0px black" }}
            className={` ${service.color} border-4 border-black rounded-[30px] p-8 shadow-[8px_8px_0px_black] cursor-pointer `}
          >
            {" "}
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black"
            >
              {" "}
              {service.title}{" "}
            </motion.h3>{" "}
            <p className="mt-6 font-semibold text-lg"> {service.desc} </p>{" "}
          </motion.div>
        ))}{" "}
      </motion.div>{" "}
    </section>
  );
}
