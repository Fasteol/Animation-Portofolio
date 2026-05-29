import { useScroll, useTransform } from "framer-motion";
export function useParallax(distance = 200) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1000], [0, -distance]);
}
