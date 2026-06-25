import type { ProjectTag } from "@/types";
import { FlaskConical, CheckCircle2, Link, Cpu } from "lucide-react";


interface ProjectCardTagProps {
    tag: ProjectTag;
}

const tagIconMap: Record<ProjectTag, React.ElementType> = {
    experiment: FlaskConical,
    production: CheckCircle2,
    blockchain: Link,
    iot: Cpu,
};

const ProjectCardTag = ({ tag }: ProjectCardTagProps) => {

    const IconComponent = tagIconMap[tag];

    const tagIcon = <IconComponent className="h-5 w-5 transition-colors duration-300 group-hover:text-[#d65d0e]" />

    return (
        <div className="group flex items-center gap-2 cursor-pointer">
            {tagIcon}

            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-mono opacity-0 transition-all duration-300 ease-out group-hover:max-w-[100px] group-hover:opacity-100">
                {tag}
            </span>
        </div>
    )
}

export default ProjectCardTag