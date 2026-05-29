import { motion } from "framer-motion";
import { hoverPress } from "~/animations/hoverPress";
import Tilt from "react-parallax-tilt";
interface Props {
  title: string;
  image: string;
  color: string;
}
export default function ProjectCard({ title, image, color }: Props) {
  return (
    <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02}>
      <motion.div
        {...hoverPress}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
        className={` ${color} overflow-hidden rounded-[30px] border-4 border-black shadow-[8px_8px_0px_black] `}
      >
        {" "}
        <div className="overflow-hidden">
          {" "}
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={title}
            className="h-72 w-full object-cover"
          />{" "}
        </div>{" "}
        <div className="p-6">
          {" "}
          <h3 className="text-3xl font-black"> {title} </h3>{" "}
        </div>{" "}
      </motion.div>
    </Tilt>
  );
}
