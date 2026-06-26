import type { ProjectTag } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card'
import ProjectCardTag from './ui/project-card-tag'

interface ProjectCardProps {
    name: string;
    description: string;
    tags: ProjectTag[];
}

const ProjectCard = ({ tags, name, description }: ProjectCardProps) => {
    return (
        <Card className="w-full max-w-md rounded-none border border-[#202020] border-b-4 border-b-[#d65d0e] bg-[#0d0e0f]   shadow-none">
            <div className="flex items-center gap-4 px-6 pt-3">
                {tags.map((tag) => <ProjectCardTag tag={tag} />)}
            </div>

            <CardHeader className="pt-3 pb-2">
                <CardTitle className="text-2xl font-bold  ">
                    {name}
                </CardTitle>
                <CardDescription className="text-sm font-medium  mt-1">
                    Stuff used
                </CardDescription>
            </CardHeader>

            <CardContent className="py-2">
                <p className="text-sm ">
                    {description}
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