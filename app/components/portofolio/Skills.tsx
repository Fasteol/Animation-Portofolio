import { motion } from "framer-motion";
const skills = [
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "PHP",
  "MySQL",
];
export default function Skills() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-24">
      {" "}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 md:mb-12"> TECH STACK </h2>{" "}
      <div className="flex flex-wrap gap-6">
        {" "}
        {skills.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ y: -10, rotate: -2 }}
            className=" px-6 py-4 bg-green-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_black] font-black text-xl "
          >
            {" "}
            {skill}{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
