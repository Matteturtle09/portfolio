import type { ComponentType } from "react"

export type ProjectTag = "experiment" | "production" | "blockchain" | "iot"

export type Technology =
  | "react"
  | "tailwind"
  | "html"
  | "next.js"
  | "typescript"
  | "javascript"
  | "node.js"
  | "express"
  | "postgresql"
  | "mongodb"
  | "docker"
  | "git"
  | "graphql"
  | "python"
  | "django"
  | "kubernetes"

export interface Project {
  name: string
  description: string
  technologies: Technology[]
  tags: ProjectTag[]
  Content: ComponentType | undefined
}
