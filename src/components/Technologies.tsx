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

export default function Technologies() {
  const technologies = [
    {
      name: "TypeScript",
      icon: TypeScript,
      color: "var(--typescript-blue)"
    },
    {
      name: "JavaScript",
      icon: JavaScript,
      color: "var(--javascript-yellow)"
    },
    {
      name: "React",
      icon: React,
      color: "var(--react-blue)"
    },
    {
      name: "MongoDB",
      icon: MongoDB,
      color: "var(--mongodb-green)"
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQL,
      color: "var(--primary-blue)"
    },
    {
      name: "Express",
      icon: Express,
      color: "var(--gray-text)"
    },
    {
      name: "Postman",
      icon: Postman,
      color: "var(--git-orange)"
    },
    {
      name: "HTML",
      icon: HTML,
      color: "var(--git-orange)"
    },
    {
      name: "CSS",
      icon: CSS,
      color: "var(--css-blue)"
    },
    {
      name: "Tailwind",
      icon: Tailwind,
      color: "var(--tailwind-blue)"
    },
    {
      name: "Git",
      icon: Git,
      color: "var(--git-orange)"
    },
    {
      name: "GitHub",
      icon: GitHub,
      color: "var(--gray-text)"
    },
    {
      name: "Prisma",
      icon: Prisma,
      color: "var(--primary-blue)"
    },
    {
      name: "NextJS",
      icon: NextJS,
      color: "var(--nextjs-gray)"
    },
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
      <div className="grid justify-center items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          technologies.map((tech) => (
            <Technology key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
          ))
        }
      </div>
    </section>
  )
} 