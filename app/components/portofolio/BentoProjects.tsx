import ProjectCard from "./ProjectCard";
export default function BentoProjects() {
  return (
    <section className="px-6 lg:px-20 py-24">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {" "}
        <div className="lg:col-span-2">
          {" "}
          <ProjectCard
            title="Dashboard UI"
            image="https://picsum.photos/800/600"
            color="bg-cyan-300"
          />{" "}
        </div>{" "}
        <ProjectCard
          title="Ecommerce"
          image="https://picsum.photos/500/600"
          color="bg-pink-300"
        />{" "}
        <ProjectCard
          title="Training App"
          image="https://picsum.photos/500/601"
          color="bg-yellow-300"
        />{" "}
      </div>{" "}
    </section>
  );
}
