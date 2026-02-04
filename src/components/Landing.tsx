import Image from "next/image"
import LinkTo from "./ui/LinkTo";

import CodeIcon from "@/public/code.png";
import GithubIcon from "@/public/github_icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.png";
import MailIcon from "@/public/mail-icon.svg";
import TechIcon from "@/public/robotic-hand.png";
import AboutMeIcon from "@/public/information.png";
import ProjectsIcon from "@/public/backlog.png";
import ContactIcon from "@/public/gmail.png";
import DownloadIcon from "@/public/download-icon.svg";
import background from "@/public/background.jpg";

export default function Landing() {
  return (
    <section id="landing" className="w-full min-h-[100vh] px-4 lg:px-44 py-24 flex flex-col" style={{ backgroundImage: `url(${background.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>

      <div className="flex-none">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-[clamp(20px,1.7vw,100px)]">
            Desarrollador FullStack | FreeLancer
          </h1>
          <Image src={CodeIcon} alt="Code Icon" width={50} height={50} />
        </div>

        <div>
          <p className="text-[var(--gray-text)] text-[clamp(16px,1vw,20px)] mt-2">
            Desarrollador FullStack MERN/PERN. Transformo ideas complejas en aplicaciones web modernas, escalables y eficientes con Next.js y Node.js.
          </p>
        </div>

        <div className="flex gap-3 mt-4 mb-8">
          <LinkTo href="https://github.com/arielsitocs" icon={GithubIcon} />
          <LinkTo href="https://www.linkedin.com/in/ariel-escobar/" icon={LinkedinIcon} />
          <LinkTo href="#contact" icon={MailIcon} />
        </div>
      </div>

      {/* --- ESTRUCTURA DEL GRID --- */}
      {/* 1. flex-1: Ocupa toda la altura restante disponible.
          2. lg:grid-cols-[1fr_1.5fr]: Columna derecha 1.5 veces más ancha.
          3. lg:grid-rows-4: Se crean 4 filas invisibles para controlar alturas.
      */}
      <div className="flex-1 grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-4">

        {/* 1. TECNOLOGIAS (Izquierda Arriba) - Ocupa 2 filas (50% altura izq) */}

        <a href="#technologies" className="lg:col-start-1 lg:row-span-2 bg-[var(--transparent-background)] rounded-lg flex items-center justify-center border-2 border-transparent text-white hover:border-2 hover:border-[var(--primary-blue)] hover:shadow-[0_0_10px_var(--primary-blue)] transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px]">
          TECNOLOGIAS
          <Image src={TechIcon} alt="Code Icon" width={50} height={50} className="ml-3" />
        </a>

        {/* 2. PROYECTOS (Derecha Arriba) - Ocupa 3 filas (75% altura der) */}
        <a href="#projects" className="lg:col-start-2 lg:row-span-3 bg-[var(--transparent-background)] rounded-lg flex items-center justify-center border-2 border-transparent text-white hover:border-2 hover:border-[var(--primary-blue)] hover:shadow-[0_0_10px_var(--primary-blue)] transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px]">
          PROYECTOS
          <Image src={ProjectsIcon} alt="Code Icon" width={50} height={50} className="ml-3" />
        </a>

        {/* 3. SOBRE MÍ (Izquierda Abajo) - Ocupa 2 filas (50% altura izq) */}
        <a href="#about" className="lg:col-start-1 lg:row-span-2 bg-[var(--transparent-background)] rounded-lg flex items-center justify-center border-2 border-transparent text-white hover:border-2 hover:border-[var(--primary-blue)] hover:shadow-[0_0_10px_var(--primary-blue)] transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px]">
          SOBRE MI
          <Image src={AboutMeIcon} alt="Code Icon" width={50} height={50} className="ml-2" />
        </a>

        {/* 4. CONTACTO (Derecha Abajo) - Ocupa 1 fila (25% altura der) */}
        <a href="#contact" className="lg:col-start-2 lg:row-span-1 bg-[var(--transparent-background)] rounded-lg flex items-center justify-center border-2 border-transparent text-white hover:border-2 hover:border-[var(--primary-blue)] hover:shadow-[0_0_10px_var(--primary-blue)] transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px]">
          CONTACTO
          <Image src={ContactIcon} alt="Code Icon" width={50} height={50} className="ml-3" />
        </a>

      </div>
    </section>
  )
}