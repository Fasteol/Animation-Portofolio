import { useRef } from "react";

export function useMagnetic() {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `
      translate(${x * 0.2}px, ${y * 0.2}px)
    `;
  };

  const reset = () => {
    if (!ref.current) return;

    ref.current.style.transform = `translate(0px,0px)`;
  };

  return {
    ref,
    handleMouseMove,
    reset,
  };
}
