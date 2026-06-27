import { GlitchTypewriter } from "./glitch-typewriter"
import ShaderBackground from "./ShaderBackground"
import { SpecialText } from "./ui/special-text"

const Hero = () => {
    return (
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
    )
}

export default Hero