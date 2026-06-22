import ShaderBackground from "./components/ShaderBackground"
import { SpecialText } from "./components/ui/special-text"

export function App() {
  return (
    <div className="grid h-[80vh] place-items-center w-full isolate relative">
      <div className="col-start-1 row-start-1 w-full h-full z-0 opacity-50">
        <ShaderBackground />
      </div>
      <div className="col-start-1 row-start-1 z-10 w-full">
        <div className="flex items-center justify-center min-h-100 p-8">
          <SpecialText once={false} className="text-6xl font-bold">👋 Hi, I'm Matteo</SpecialText>
        </div>      
      </div>
    </div>
  )
}

export default App