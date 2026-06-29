import type { Project } from "@/types";
import { motion } from "motion/react";
import { useEffect } from "react";

interface ProjectPageProps {
    project: Project;
    onClose: () => void;
}

const ProjectPage = ({ project, onClose }: ProjectPageProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="fixed inset-0 z-50 bg-[#0d0e0f] flex flex-col h-screen w-screen overflow-hidden">
            <div className="p-10 pb-0">
                <button onClick={onClose} className="text-[#d65d0e] font-mono">
                    ← BACK
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10">
                <motion.h1
                    layoutId={`title-${project.name}`}
                    className="text-4xl font-bold text-white"
                >{project.name}</motion.h1>
                <div className="mt-6 text-white">
                    {project.description}
                </div>
            </div>
        </section>
    )
}

export default ProjectPage