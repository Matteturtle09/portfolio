import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import TricolorSeparator from "./components/ui/tricolor-separator"

export function App() {
  return (
    <>
      <Hero/>
      <TricolorSeparator />
      <ProjectsSection projects={[{
        name: "test", 
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
        technologies: ['tailwind', 'react'],
        tags: ['experiment']
      }]} />
    </>
  )
}

export default App