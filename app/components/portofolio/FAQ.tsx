const faq = [
  {
    q: "What technologies do you use?",
    a: "React, TypeScript, Tailwind, Framer Motion.",
  },
  {
    q: "Do you build responsive websites?",
    a: "Yes, fully responsive and optimized.",
  },
];
export default function FAQ() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-32">
      {" "}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 md:mb-20"> FAQ </h2>{" "}
      <div className="space-y-8">
        {" "}
        {faq.map((item) => (
          <div
            key={item.q}
            className=" bg-white border-4 border-black rounded-[30px] p-8 shadow-[8px_8px_0px_black] "
          >
            {" "}
            <h3 className="text-xl sm:text-2xl font-black"> {item.q} </h3>{" "}
            <p className="mt-4 text-lg font-semibold"> {item.a} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
