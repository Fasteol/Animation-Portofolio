const process = [
  "Research",
  "Wireframe",
  "Design",
  "Develop",
  "Animate",
  "Deploy",
];
export default function Process() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-32">
      {" "}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-12 md:mb-20"> MY PROCESS </h2>{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {" "}
        {process.map((step, i) => (
          <div
            key={step}
            className=" bg-green-300 border-4 border-black rounded-[30px] p-4 sm:p-6 shadow-[8px_8px_0px_black] text-center "
          >
            {" "}
            <h1 className="text-4xl sm:text-5xl font-black"> {i + 1} </h1>{" "}
            <p className="mt-4 font-black text-xl"> {step} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
