import type { Technology } from "@/types";
import { FlaskConical, CheckCircle2, Link, Cpu } from "lucide-react";
import {
    SiReact, SiTailwindcss, SiHtml5, SiNextdotjs, SiTypescript,
    SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
    SiDocker, SiGit, SiGraphql, SiPython, SiDjango, SiKubernetes
} from "@icons-pack/react-simple-icons";

interface ProjectCardTechnologyProps {
    technology: Technology;
}

const technologyIconMap: Record<Technology, React.ElementType> = {
    react: SiReact,
    tailwind: SiTailwindcss,
    html: SiHtml5,
    "next.js": SiNextdotjs,
    typescript: SiTypescript,
    javascript: SiJavascript,
    "node.js": SiNodedotjs,
    express: SiExpress,
    postgresql: SiPostgresql,
    mongodb: SiMongodb,
    docker: SiDocker,
    git: SiGit,
    graphql: SiGraphql,
    python: SiPython,
    django: SiDjango,
    kubernetes: SiKubernetes,
};

const ProjectCardTechnology = ({ technology }: ProjectCardTechnologyProps) => {
    const IconComponent = technologyIconMap[technology];

    if (!IconComponent) return null;

    return (
        <div className="group flex items-center cursor-pointer">
            <IconComponent className="h-5 w-5 transition-colors duration-300 group-hover:text-[#d65d0e]" />

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-mono opacity-0 transition-all duration-300 ease-out group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2">
                {technology}
            </span>
        </div>
    );
};

export default ProjectCardTechnology;