"use client"

import LinkTo from "./ui/LinkTo";

import GithubIcon from "@/public/github_icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.png";
import MailIcon from "@/public/mail-icon.svg";
import background from "@/public/background.jpg";

export default function Landing() {
  return (
    <section id="landing" className="w-full min-h-[100vh] px-4 lg:px-44 py-24 flex flex-col border-b-3 border-gray-background" style={{ backgroundImage: `url(${background.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex-none">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-[clamp(20px,1.7vw,100px)]">
            Desarrollador <span className="text-light-primary-blue font-righteous border-b-4 border-primary-blue">FullStack</span> & <span className="text-light-primary-red font-righteous border-b-4 border-light-primary-red">FreeLancer.</span>
          </h1>
        </div>

        <div>
          <p className="text-gray-text text-[clamp(16px,1vw,20px)] mt-2">
            Desarrollador FullStack MERN/PERN. Transformo ideas complejas en aplicaciones web modernas, escalables y eficientes con Next.js y Node.js.
          </p>
        </div>

        <div className="flex gap-3 mt-4 mb-8">
          <LinkTo href="https://github.com/arielsitocs" icon={GithubIcon} />
          <LinkTo href="https://www.linkedin.com/in/ariel-escobar/" icon={LinkedinIcon} />
          <LinkTo href="#contact" icon={MailIcon} />
        </div>
      </div>
      {/* 1. flex-1: Ocupa toda la altura restante disponible.
          2. lg:grid-cols-[1fr_1.5fr]: Columna derecha 1.5 veces más ancha.
          3. lg:grid-rows-4: Se crean 4 filas invisibles para controlar alturas.
      */}
      <div className="flex-1 grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-4">

        {/* 1. TECNOLOGIAS (Izquierda Arriba) */}
        <a href="#technologies" className="lg:col-start-1 lg:row-span-2 bg-transparent-background rounded-lg flex items-center justify-center text-white border-b-6 border-b-transparent hover:border-b-primary-blue hover:text-light-primary-blue transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px] group">
          TECNOLOGIAS
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-colors">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </a>

        {/* 2. PROYECTOS (Derecha Arriba) */}
        <a href="#projects" className="lg:col-start-2 lg:row-span-3 bg-transparent-background rounded-lg flex items-center justify-center text-white border-b-6 border-b-transparent hover:border-b-primary-blue hover:text-light-primary-blue transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px] group">
          PROYECTOS
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-colors">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </a>

        {/* 3. SOBRE MÍ (Izquierda Abajo) */}
        <a href="#about" className="lg:col-start-1 lg:row-span-2 bg-transparent-background rounded-lg flex items-center justify-center text-white border-b-6 border-b-transparent hover:border-b-primary-blue hover:text-light-primary-blue transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px] group">
          SOBRE MI
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-colors">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </a>

        {/* 4. CONTACTO (Derecha Abajo) */}
        <a href="#contact" className="lg:col-start-2 lg:row-span-1 bg-transparent-background rounded-lg flex items-center justify-center text-white border-b-6 border-b-transparent hover:border-b-primary-blue hover:text-light-primary-blue transition-all text-[clamp(16px,1vw,20px)] backdrop-blur-[6px] group">
          CONTACTO
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 transition-colors">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </a>

      </div>
    </section>
  )
}