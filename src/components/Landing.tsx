"use client"

import LinkTo from "./ui/LinkTo";

import GithubIcon from "@/public/github_icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.png";
import MailIcon from "@/public/mail-icon.svg";

import LandingCard from "./ui/LandingCard";

export default function Landing() {
  return (
    <section id="landing" className="w-full min-h-[100vh] bg-landing-gradient px-4 lg:px-44 py-30 lg:py-44 flex flex-col border-b-3 border-gray-background">
      <div className="text-white font-semibold">
        <h1 className="text-[clamp(24px,3vw,30px)]">Desarrollador Web dedicado a ser</h1>
        <h1  className="text-[clamp(24px,3vw,30px)] mt-[-7px] mb-2"><span className="text-primary-blue">FullStack</span> & <span className="text-light-primary-red">FreeLancer.</span></h1>
        <p className=" lg:max-w-[60%] text-gray-text text-[clamp(13px,3vw,17px)]">Ingeniero Informático especializado en el ecosistema MERN/PERN. Construyo aplicaciones web modernas, 
          escalables y eficientes, dominando desde la arquitectura en el servidor hasta la interfaz de usuario.</p>
      </div>
      <div className="flex gap-3 mt-5 mb-5 md:mb-10">
        <LinkTo href="https://github.com/arielsitocs" icon={GithubIcon} />
        <LinkTo href="https://www.linkedin.com/in/ariel-escobar/" icon={LinkedinIcon} />
        <LinkTo href="#contact" icon={MailIcon} />
      </div>
      <div className="grid grid-cols-[100%] justify-center md:justify-normal md:grid-cols-[45%_45%] lg:grid-cols-[300px_300px] gap-6 ">
        <LandingCard number='01' name="Tecnologías" text="El core de mi trabajo. Arquitectura y stack MERN/PERN." to="#technologies" />
        <LandingCard number='02' name="Proyectos" text="Código en producción. Soluciones web reales y escalables." to="#projects" />
        <LandingCard number='03' name="Sobre Mí" text="Mi trayectoria, mentalidad y enfoque como Ingeniero." to="#about" />
        <LandingCard number='04' name="Contacto" text="Conversemos. Listo para nuevos desafíos técnicos." to="#contact" />
      </div>
    </section>
  )
}