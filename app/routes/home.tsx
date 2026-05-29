import { motion } from "framer-motion";
import PortfolioPage from "~/pages/portofolio";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {" "}
      <PortfolioPage />{" "}
    </motion.div>
  );
}
