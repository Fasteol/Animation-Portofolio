import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
export default function Projects() {
  return (
    <section className="px-6 lg:px-20 py-24">
      {" "}
      <h2 className="text-5xl font-black mb-16"> FEATURED PROJECTS </h2>{" "}
      <div className="grid lg:grid-cols-3 gap-10">
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
