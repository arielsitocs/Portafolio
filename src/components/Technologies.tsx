import Image from "next/image";

import Technology from "./ui/Technology";

import TypeScript from "@/public/typescript_icon.svg";
import JavaScript from "@/public/javascript_icon.svg";
import React from "@/public/react_icon.svg";
import MongoDB from "@/public/mongodb_icon.svg";
import PostgreSQL from "@/public/postgresql_icon.svg";
import Express from "@/public/expressjs_icon.svg";
import Postman from "@/public/postman_icon.svg";
import HTML from "@/public/html5_icon.svg";
import CSS from "@/public/css_icon.svg";
import Tailwind from "@/public/tailwind_icon.svg";
import Git from "@/public/git_icon.svg";
import GitHub from "@/public/github_icon.svg";
import Prisma from "@/public/prisma_icon.svg";
import NextJS from "@/public/nextjs_icon.svg";
import TechIcon from "@/public/robotic-hand.png";
import SpringBoot from "@/public/springboot_icon.svg";
import Node from "@/public/node_icon.svg";
import Nest from "@/public/nest-icon.svg";

export default function Technologies() {
  
  const technologies = [
    {
      name: "TypeScript",
      icon: TypeScript,
      color: "linear-gradient(145deg, rgba(49, 120, 198, 0.28) 0%, rgba(10, 16, 28, 0.92) 100%)"
    },
    {
      name: "JavaScript",
      icon: JavaScript,
      color: "linear-gradient(145deg, rgba(240, 219, 79, 0.24) 0%, rgba(30, 28, 10, 0.92) 100%)"
    },
    {
      name: "React",
      icon: React,
      color: "linear-gradient(145deg, rgba(88, 196, 220, 0.26) 0%, rgba(8, 18, 24, 0.92) 100%)"
    },
    {
      name: "MongoDB",
      icon: MongoDB,
      color: "linear-gradient(145deg, rgba(0, 237, 100, 0.24) 0%, rgba(8, 22, 14, 0.92) 100%)"
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQL,
      color: "linear-gradient(145deg, rgba(5, 115, 194, 0.28) 0%, rgba(8, 16, 28, 0.92) 100%)"
    },
    {
      name: "Express",
      icon: Express,
      color: "linear-gradient(145deg, rgba(156, 156, 156, 0.22) 0%, rgba(20, 20, 20, 0.92) 100%)"
    },
    {
      name: "HTML",
      icon: HTML,
      color: "linear-gradient(145deg, rgba(227, 79, 38, 0.26) 0%, rgba(28, 14, 10, 0.92) 100%)"
    },
    {
      name: "CSS",
      icon: CSS,
      color: "linear-gradient(145deg, rgba(38, 77, 228, 0.26) 0%, rgba(10, 12, 30, 0.92) 100%)"
    },
    {
      name: "Tailwind",
      icon: Tailwind,
      color: "linear-gradient(145deg, rgba(56, 189, 248, 0.24) 0%, rgba(8, 20, 28, 0.92) 100%)"
    },
    {
      name: "Git",
      icon: Git,
      color: "linear-gradient(145deg, rgba(240, 80, 50, 0.26) 0%, rgba(30, 12, 10, 0.92) 100%)"
    },
    {
      name: "GitHub",
      icon: GitHub,
      color: "linear-gradient(145deg, rgba(130, 130, 130, 0.24) 0%, rgba(14, 14, 14, 0.94) 100%)"
    },
    {
      name: "Prisma",
      icon: Prisma,
      color: "linear-gradient(145deg, rgba(5, 115, 194, 0.24) 0%, rgba(10, 16, 26, 0.92) 100%)"
    },
    {
      name: "Postman",
      icon: Postman,
      color: "linear-gradient(145deg, rgba(255, 108, 55, 0.24) 0%, rgba(30, 14, 10, 0.92) 100%)"
    },
    {
      name: "Node.js",
      icon: Node,
      color: "linear-gradient(145deg, rgba(51, 153, 57, 0.24) 0%, rgba(10, 20, 12, 0.92) 100%)"
    },
    {
      name: "Next.js",
      icon: NextJS,
      color: "linear-gradient(145deg, rgba(255, 255, 255, 0.16) 0%, rgba(10, 10, 10, 0.94) 100%)"
    },
    {
      name: "SpringBoot",
      icon: SpringBoot,
      color: "linear-gradient(145deg, rgba(109, 179, 63, 0.24) 0%, rgba(12, 20, 10, 0.92) 100%)"
    },
    {
      name: "Nest.js",
      icon: Nest,
      color: "linear-gradient(145deg, rgba(234, 40, 69, 0.24) 0%, rgba(26, 10, 14, 0.92) 100%)"
    }
  ]

  return (
    <section id="technologies" className="w-full min-h-[100vh] px-4 lg:px-44 py-10 flex flex-col bg-[var(--secondary-background)]">
      <div className="flex-none mb-10">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-[clamp(23px,1.7vw,100px)]">
            Mi Stack Tecnológico
          </h1>
          <Image src={TechIcon} alt="Code Icon" width={50} height={50} />
        </div>

        <div>
          <p className="text-gray-400 mt-2">
            Un resumen de las tecnologías que manejo, estoy en constante proceso de aprendizaje para mantenerme actualizado.
          </p>
        </div>
      </div>
      <div className="grid justify-center items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          technologies.map((tech) => (
            <Technology key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
          ))
        }
      </div>
    </section>
  )
} 