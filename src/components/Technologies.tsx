import Technology from "./ui/Technology";

import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Technologies() {

  const technologies = [
    {
      name: "TypeScript",
      icono: SiTypescript,
      iconColor: "#3178c6",
      color: "#1f4f83"
    },
    {
      name: "JavaScript",
      icono: SiJavascript,
      iconColor: "#f0db4f",
      color: "#5a4d00"
    },
    {
      name: "React",
      icono: SiReact,
      iconColor: "#61dafb",
      color: "#153846"
    },
    {
      name: "MongoDB",
      icono: SiMongodb,
      iconSize: 26,
      iconColor: "#00ed64",
      color: "#0b2b15"
    },
    {
      name: "PostgreSQL",
      icono: SiPostgresql,
      iconColor: "#336791",
      color: "#1c2a55"
    },
    {
      name: "Express",
      icono: SiExpress,
      iconColor: "#ffffff",
      color: "#0c0c0c"
    },
    {
      name: "HTML",
      icono: SiHtml5,
      iconColor: "#e34f26",
      color: "#5c2410"
    },
    {
      name: "CSS",
      icono: SiCss,
      iconColor: "#264de4",
      color: "#0c2f7a"
    },
    {
      name: "Tailwind",
      icono: SiTailwindcss,
      iconColor: "#38bdf8",
      color: "#103244"
    },
    {
      name: "Git",
      icono: SiGit,
      iconColor: "#f05032",
      color: "#4a1c14"
    },
    {
      name: "GitHub",
      icono: SiGithub,
      iconColor: "#ffffff",
      color: "#2b2b2b"
    },
    {
      name: "Prisma",
      icono: SiPrisma,
      iconColor: "#ffffff",
      color: "#0d1320"
    },
    {
      name: "Postman",
      icono: SiPostman,
      iconColor: "#ff6c37",
      color: "#5a2611"
    },
    {
      name: "Node.js",
      icono: SiNodedotjs,
      iconColor: "#339933",
      color: "#173d12"
    },
    {
      name: "Next.js",
      icono: SiNextdotjs,
      iconColor: "#ffffff",
      color: "#0c0c0c"
    },
    {
      name: "SpringBoot",
      icono: SiSpringboot,
      iconColor: "#6db33f",
      color: "#1e3f12"
    },
    {
      name: "Nest.js",
      icono: SiNestjs,
      iconColor: "#ea2845",
      color: "#5a1230"
    }
  ]

  return (
    <section id="technologies" className="w-full flex flex-col justify-center px-2 md:px-10 min-h-[100vh] border-b-2 border-main-border">
      <div className="text-main-text font-sans font-medium">
        <h3 className="font-mono font-normal text-title mb-4">-- Stack tecnológico</h3>
        <h1 className="text-[clamp(20px,5vw,40px)] mb-2">Mi stack<span className="text-title">.</span></h1>
        <p className="text-gray-text">Tecnologías que manejo — en constante aprendizaje.</p>
      </div>
      <div className="flex flex-col grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[20%_20%_20%] gap-1 p-1 mt-5">
        {
          technologies.map((t) => (
            <Technology key={t.name} name={t.name} icono={t.icono} iconSize={t.iconSize} iconColor={t.iconColor} color={t.color} />
          ))
        }
      </div>
    </section>
  )
} 