import { GlitchTypewriter } from "./glitch-typewriter"
import ShaderBackground from "./ShaderBackground"
import { SpecialText } from "./ui/special-text"

const Hero = () => {
  return (
    <section className="relative isolate grid h-[40vh] w-full items-center overflow-hidden md:h-[50vh] lg:h-dvh">
      <div className="absolute inset-0 z-0 opacity-30">
        <ShaderBackground />
      </div>

      <div className="relative z-10 flex w-full items-center justify-center px-8">
        <div className="flex w-full max-w-2xl flex-col items-start gap-4">
          <SpecialText
            once={true}
            className="text-5xl leading-none font-bold md:text-7xl"
          >
            Hi, I'm Matteo
          </SpecialText>

          <div className="text-2xl md:text-3xl">
            <GlitchTypewriter
              delay={0.5}
              speed={75}
              delayBetweenWords={1000}
              words={[
                "Software Engineer",
                "Fullstack Developer",
                "IoT Developer",
              ]}
              cursor={true}
              cursorChar="_"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
