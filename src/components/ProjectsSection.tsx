import type { Project } from "@/types"
import ProjectCard from "./project-card"

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      <h1 className="col-span-full text-center text-4xl font-mono mb-6">
        My Projects
      </h1>
      {projects.map((project) => (
        <ProjectCard key={project.name
        } project={project} />
      ))}
    </section>
  )
}

export default ProjectsSection