import type { Project } from "@/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card"
import ProjectCardTag from "./ui/project-card-tag"
import ProjectCardTechnology from "./ui/project-card-technology"
import { motion } from "motion/react"

interface ProjectCardProps {
  project: Project
  onOpen: () => void
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <Card className="max-w-md rounded-none border border-b-4 border-[#202020] border-b-[#d65d0e] bg-[#0d0e0f] shadow-none">
      <div className="flex items-center gap-4 px-6 pt-3">
        {project.tags.map((tag) => (
          <ProjectCardTag tag={tag} />
        ))}
      </div>

      <CardHeader>
        <motion.div layoutId={`title-${project.name}`}>
          <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
        </motion.div>
        <CardDescription className="mt-1 flex w-full flex-row flex-wrap items-center gap-1 text-sm font-medium">
          {project.technologies.map((tech) => (
            <ProjectCardTechnology key={tech} technology={tech} />
          ))}
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <p className="text-sm">{project.description}</p>
      </CardContent>

      <CardFooter className="mt-4 flex items-center justify-between rounded-none border-t border-[#202020] pt-4 pb-6">
        <button
          className="rounded-none bg-[#202020] px-3 py-1 font-mono text-xs font-bold uppercase transition-colors hover:bg-[#d65d0e]"
          onClick={onOpen}
        >
          Read More →
        </button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
