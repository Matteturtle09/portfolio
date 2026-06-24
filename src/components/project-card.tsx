import { EthereumIcon } from './icons/hugeicons-ethereum'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card'
import { FlaskConical } from 'lucide-react'

const ProjectCard = () => {
    return (
        <Card className="w-full max-w-md rounded-none border border-[#202020] border-b-4 border-b-[#d65d0e] bg-[#0d0e0f]   shadow-none">
            <div className="flex items-center gap-4 px-6 pt-6">
                <div className="group flex items-center gap-2 cursor-pointer">
                    <EthereumIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-[#d65d0e]" />
                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-mono opacity-0 transition-all duration-300 ease-out group-hover:max-w-[100px] group-hover:opacity-100">
                        Blockchain
                    </span>
                </div>

                <div className="group flex items-center gap-2 cursor-pointer">
                    <FlaskConical className="h-5 w-5 transition-colors duration-300 group-hover:text-[#d65d0e]" />
                    <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-mono opacity-0 transition-all duration-300 ease-out group-hover:max-w-[100px] group-hover:opacity-100">
                        Experiment
                    </span>
                </div>
            </div>

            <CardHeader className="pt-3 pb-2">
                <CardTitle className="text-2xl font-bold  ">
                    Project Title
                </CardTitle>
                <CardDescription className="text-sm font-medium  mt-1">
                    Stuff used
                </CardDescription>
            </CardHeader>

            <CardContent className="py-2">
                <p className="text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi mollitia, quaerat repellat voluptates quo harum, nulla delectus necessitatibus omnis esse quae repellendus corrupti, incidunt distinctio veritatis eius dolores assumenda velit.
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