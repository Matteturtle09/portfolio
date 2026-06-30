import type { Project } from "@/types"
import { motion } from "motion/react"
import { useEffect } from "react"

interface ProjectPageProps {
  project: Project
  onClose: () => void
}

const ProjectPage = ({ project, onClose }: ProjectPageProps) => {
  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const Content = project.Content

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex h-screen flex-col bg-[#0d0e0f]"
    >
      <button onClick={onClose} className="p-10">
        ← BACK
      </button>

      <div className="flex-1 overflow-y-auto p-10">
        <motion.h1
          layoutId={`title-${project.name}`}
          className="mb-8 text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          {" "}
          {project.name}
        </motion.h1>

        <article className="prose w-full max-w-none prose-invert [&_table]:w-full [&_table]:table-auto">
          {Content != undefined ? <Content /> : <p>No content</p>}
        </article>
      </div>
    </motion.section>
  )
}

export default ProjectPage
