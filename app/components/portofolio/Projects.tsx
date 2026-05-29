import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
export default function Projects() {
  return (
    <section className="px-6 lg:px-20 py-16 md:py-24">
      {" "}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 md:mb-16"> FEATURED PROJECTS </h2>{" "}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {" "}
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            color={project.color}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
}
