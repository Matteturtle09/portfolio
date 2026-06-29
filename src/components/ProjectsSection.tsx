import { motion, type Variants } from "framer-motion"
import type { Project } from "@/types"
import ProjectCard from "./project-card"
import { useState } from "react";
import ProjectPage from "./project-page";

interface ProjectSectionProps {
  projects: Project[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

const ProjectsSection = ({ projects }: ProjectSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-mono mb-12"
      >
        My Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.name} variants={itemVariants}>
            <ProjectCard project={project} onOpen={() => setSelectedProject(project)}/>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectPage 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

export default ProjectsSection