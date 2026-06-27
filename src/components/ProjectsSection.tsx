import type { Project } from "@/types"
import ProjectCard from "./project-card"

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12 space-y-6">
      <h1 className="text-center text-4xl font-mono">
        My Projects
      </h1>
      {projects.map((project) => <ProjectCard project={project} />)}
    </section>
  )
}

export default ProjectsSection