import Marquee from "react-fast-marquee";
export default function MarqueeText() {
  return (
    <Marquee speed={80}>
      {" "}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mr-10"> CREATIVE DEVELOPER — </h1>{" "}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mr-10"> REACT SPECIALIST — </h1>{" "}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mr-10"> MOTION DESIGN — </h1>{" "}
    </Marquee>
  );
}
