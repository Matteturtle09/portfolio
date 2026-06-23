import ShaderBackground from "./components/ShaderBackground"
import { GlitchTypewriter } from "./components/glitch-typewriter"
import { SpecialText } from "./components/ui/special-text"
import TricolorSeparator from "./components/ui/tricolor-separator"

export function App() {
  return (
    <>
      <div className="grid h-[80vh] place-items-center w-full isolate relative">
        <div className="col-start-1 row-start-1 w-full h-full z-0 opacity-30">
          <ShaderBackground />
        </div>
        <div className="col-start-1 row-start-1 z-10 w-full">
          <div className="flex flex-col items-center justify-center min-h-100 p-8 space-y-12">
            <SpecialText once={false} className="text-6xl font-bold">Hi, I'm Matteo</SpecialText>
            <div className=" text-center text-3xl font-mono font-bold"><GlitchTypewriter delay={0.5} speed={75} delayBetweenWords={1000} words={["Software Engineer", "Fullstack Developer", "IoT Developer",]} cursor={true} cursorChar="_" /></div>
          </div>
        </div>
      </div>
      <TricolorSeparator />
    </>
  )
}

export default App