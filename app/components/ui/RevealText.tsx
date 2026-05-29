import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
}
export default function RevealText({ children }: Props) {
  return (
    <motion.div
      initial={{ y: 120 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80 }}
      className="overflow-hidden"
    >
      {" "}
      {children}{" "}
    </motion.div>
  );
}
