import type { Project } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card'
import ProjectCardTag from './ui/project-card-tag'
import ProjectCardTechnology from './ui/project-card-technology';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="w-full max-w-md rounded-none border border-[#202020] border-b-4 border-b-[#d65d0e] bg-[#0d0e0f]   shadow-none">
            <div className="flex items-center gap-4 px-6 pt-3">
                {project.tags.map((tag) => <ProjectCardTag tag={tag} />)}
            </div>

            <CardHeader className="">
                <CardTitle className="text-2xl font-bold  ">
                    {project.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium mt-1 flex flex-row flex-wrap items-center gap-1 w-full">
                    {project.technologies.map((tech) => (
                        <ProjectCardTechnology key={tech} technology={tech} />
                    ))}
                </CardDescription>
            </CardHeader>

            <CardContent className="">
                <p className="text-sm ">
                    {project.description}
                </p>
            </CardContent>

            <CardFooter className="pt-4 pb-6 flex justify-between items-center border-t border-[#202020] mt-4 rounded-none">
                <button className="px-3 py-1 bg-[#202020] hover:bg-[#d65d0e]   font-mono text-xs font-bold uppercase transition-colors rounded-none">
                    Read More →
                </button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard