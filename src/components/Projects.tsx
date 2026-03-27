import Image from "next/image";

import ClickForSeat from "@/public/ClickForSeat.png";
import Clocker from "@/public/Clocker.png";
import ProjectIcon from "@/public/start-up.png";

import Project from "./ui/Project";

import ProjectTypes from "../types/Project";

export default function Projects() {
  const projects: ProjectTypes[] = [
    {
      name: "ClickForSeat",
      description: "Sistema de reservación de asientos para múltiples funciones de cine.",
      image: ClickForSeat,
      technologies: [
        "NextJS",
        "TypeScript",
        "PostgreSQL",
        "Express",
        "Tailwind"
      ],
      repoLink: "https://github.com/arielsitocs/ClickForSeat",
      liveLink: "https://click-for-seat.vercel.app/"
    },
    {
      name: "Clocker",
      description: "Aplicación de reloj basada en la de Android, adoptando sus funciones para uso web y móvil.",
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
    <section id="projects" className="w-full min-h-fit px-4 lg:px-44 py-10 flex flex-col border-b-3 border-gray-background">
      <div className="flex-none mb-10">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-[clamp(23px,1.7vw,100px)]">
            Mis Proyectos
          </h1>
          <Image src={ProjectIcon} alt="Code Icon" width={50} height={50} />
        </div>

        <div>
          <p className="text-gray-400 mt-2">
            Proyectos destacados que he realizado con el fin de poder demostrar mis habilidades al publico.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        {
          projects.map((project) => (
            <Project key={project.name} name={project.name} description={project.description} image={project.image} technologies={project.technologies} repoLink={project.repoLink} liveLink={project.liveLink} />
          ))
        }
      </div>
    </section>
  )
}