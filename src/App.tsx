import ShaderBackground from "./components/ShaderBackground"
import { GlitchTypewriter } from "./components/glitch-typewriter"
import ProjectCard from "./components/project-card"
import { SpecialText } from "./components/ui/special-text"
import TricolorSeparator from "./components/ui/tricolor-separator"

export function App() {
  return (
    <>
      <section className="grid h-screen place-items-center w-full isolate relative">
        <div className="col-start-1 row-start-1 w-full h-full z-0 opacity-30">
          <ShaderBackground />
        </div>
        <div className="col-start-1 row-start-1 z-10 w-full">
          <div className="flex flex-col items-center justify-center min-h-100 p-8 space-y-12">
            <SpecialText once={true} className="text-6xl font-bold">Hi, I'm Matteo</SpecialText>
            <div className=" text-center text-3xl font-michroma"><GlitchTypewriter delay={0.5} speed={75} delayBetweenWords={1000} words={["Software Engineer", "Fullstack Developer", "IoT Developer",]} cursor={true} cursorChar="_" /></div>
          </div>
        </div>
      </section>
      <TricolorSeparator />
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-6">
        <h1 className="text-center text-4xl font-mono">
          My Projects
        </h1>
        <ProjectCard/>
      </section>
    </>
  )
}

export default App