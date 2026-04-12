import Image from "next/image";

import Project from "./ui/Project";

import ProjectTypes from "../types/Project";

import Clocker from "@/public/Clocker.png";
import TellMe from "@/public/TellMe.png";

export default function Projects() {
  const projects: ProjectTypes[] = [
    {
      name: "TellMe (WIP)",
      description: "Red social enfocada a publicaciones de texto o imagenes. (Funcionalidad Basica implementada) ",
      number: "01",
      type: "Red Social",
      image: TellMe,
      technologies: [
        "NextJS",
        "TypeScript",
        "PostgreSQL",
        "NestJS",
        "Tailwind"
      ],
      repoLink: "https://github.com/arielsitocs/TellMe",
      liveLink: "https://tell-me-xnvh.vercel.app/"
    },
    {
      name: "Clocker",
      description: "Aplicación de reloj basada en la de Android, adoptando sus funciones para uso web y móvil.",
      number: "02",
      type: "Utilidad",
      image: Clocker,
      technologies: [
        "NextJS",
        "TypeScript",
        "Axios",
        "LocalStorage"
      ],
      repoLink: "https://github.com/arielsitocs/Clocker",
      liveLink: "https://clocker-phi-ten.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="w-full flex flex-col justify-center px-2 md:px-10 min-h-[100vh] pt-[80px] pb-[80px] border-b-2 border-main-border">
      <div className="text-main-text font-sans font-medium">
        <h3 className="font-mono font-normal text-title mb-4">-- TRABAJO</h3>
        <h1 className="text-[clamp(20px,5vw,40px)] mb-2">Proyectos<span className="text-title">.</span></h1>
        <p className="text-gray-text mb-5">Proyectos destacados que demuestran mis habilidades.</p>
      </div>
      <div className="flex flex-col gap-2">
        {
          projects.map((p) => (
            <Project
              key={p.name}
              name={p.name}
              description={p.description}
              number={p.number}
              type={p.type}
              image={p.image}
              technologies={p.technologies}
              repoLink={p.repoLink}
              liveLink={p.liveLink}
            />
          ))
        }
      </div>
    </section>
  )
}