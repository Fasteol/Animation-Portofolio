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
    <section className="px-6 lg:px-20 py-32">
      {" "}
      <h2 className="text-5xl font-black mb-20"> MY PROCESS </h2>{" "}
      <div className="grid lg:grid-cols-6 gap-6">
        {" "}
        {process.map((step, i) => (
          <div
            key={step}
            className=" bg-green-300 border-4 border-black rounded-[30px] p-6 shadow-[8px_8px_0px_black] text-center "
          >
            {" "}
            <h1 className="text-5xl font-black"> {i + 1} </h1>{" "}
            <p className="mt-4 font-black text-xl"> {step} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
