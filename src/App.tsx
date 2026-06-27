import Hero from "./components/Hero"
import ProjectsSection from "./components/ProjectsSection"
import TricolorSeparator from "./components/ui/tricolor-separator"
import type { Project } from "./types";

export function App() {

  const dummyProjects: Project[] = [
    {
      name: "Nebula Dashboard",
      description: "A high-performance analytics dashboard designed for real-time monitoring of cloud infrastructure, featuring custom data visualization components.",
      technologies: ['next.js', 'typescript', 'tailwind', 'graphql', 'docker'],
      tags: ['production']
    },
    {
      name: "ChainLink Sentinel",
      description: "A decentralized security monitoring tool that tracks smart contract vulnerabilities and alerts developers in real-time.",
      technologies: ['typescript', 'node.js', 'express', 'postgresql'],
      tags: ['blockchain', 'production']
    },
    {
      name: "EcoSensor IoT Gateway",
      description: "Firmware and cloud bridge for agricultural IoT sensors, enabling remote monitoring of soil moisture and environmental conditions.",
      technologies: ['python', 'kubernetes', 'mongodb', 'docker'],
      tags: ['iot', 'experiment']
    },
    {
      name: "PixelCraft Editor",
      description: "A browser-based collaborative image manipulation tool built with a focus on low latency and responsive design patterns.",
      technologies: ['react', 'tailwind', 'javascript', 'node.js'],
      tags: ['experiment']
    },
    {
      name: "Quantum Ledger API",
      description: "A highly scalable API architecture for a private blockchain network, handling thousands of transactions per second with sub-millisecond latency.",
      technologies: ['next.js', 'postgresql', 'docker', 'typescript'],
      tags: ['blockchain', 'production']
    },
    {
      name: "SmartFarm Hub",
      description: "Comprehensive management system for automated irrigation systems, integrating weather forecasting APIs and local sensor arrays.",
      technologies: ['python', 'django', 'postgresql', 'react'],
      tags: ['iot', 'production']
    },
    {
      name: "Legacy Migration Tool",
      description: "Internal utility script and interface for mapping outdated SQL schemas to modern NoSQL document structures.",
      technologies: ['javascript', 'mongodb', 'git'],
      tags: ['experiment']
    },
    {
      name: "Velocity Analytics",
      description: "User behavior tracking platform that provides heatmaps and click-stream analysis for e-commerce sites.",
      technologies: ['next.js', 'typescript', 'tailwind', 'graphql', 'mongodb'],
      tags: ['production']
    },
    {
      name: "Drone Fleet Controller",
      description: "A central control system for autonomous drone swarms, managing flight paths and energy consumption metrics.",
      technologies: ['python', 'kubernetes', 'docker', 'postgresql'],
      tags: ['iot', 'experiment']
    },
    {
      name: "Identity Protocol",
      description: "A sovereign identity solution leveraging blockchain for verifiable credentials in decentralized finance environments.",
      technologies: ['react', 'typescript', 'express', 'postgresql'],
      tags: ['blockchain', 'production']
    }
  ];

  return (
    <>
      <Hero />
      <TricolorSeparator />
      <ProjectsSection projects={dummyProjects} />
    </>
  )
}

export default App