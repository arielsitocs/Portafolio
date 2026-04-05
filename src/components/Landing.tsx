"use client"

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import LandingCard from "./ui/LandingCard";

export default function Landing() {
  return (
    <section id="landing" className="w-full flex flex-col justify-center px-2 md:px-10 pt-[80px] md:pt-[100px] min-h-[100vh] border-b-2 border-main-border">
      <div className="text-main-text font-sans font-medium">
        <h3 className="font-mono font-normal text-title mb-4">-- DISPONIBLE PARA TRABAJAR</h3>
        <h1 className="text-[clamp(20px,5vw,40px)]">Desarrollador</h1>
        <h1 className="text-[clamp(20px,5vw,40px)]"><span className="text-title ">FullStack</span> & FreeLancer<span className="text-red">.</span></h1>
      </div>
      <div>
        <p className="text-gray-text mt-5 mb-5 max-w-[95%] text-[clamp(15px,2vw,20px)] md:max-w-[40%]">Ingeniero Informático especializado en el ecosistema MERN/PERN. Construyo aplicaciones web
          modernas, escalables y eficientes, desde la arquitectura hasta la interfaz.</p>
      </div>
      <div className='flex w-full items-center mb-5'>
        <a href="" className='group hover:bg-secondary-background rounded-lg p-3 '>
          <FaGithub size={30} className='text-gray-text transition-colors group-hover:text-title' />
        </a>
        <a href="" className='group hover:bg-secondary-background rounded-lg p-3 '>
          <FaLinkedin size={30} className='text-gray-text transition-colors hover:text-title cursor-pointer' />
        </a>
        <a href="" className='group hover:bg-secondary-background rounded-lg p-3 '>
          <MdEmail size={30} className='text-gray-text transition-colors hover:text-title cursor-pointer' />
        </a>
      </div>
      <div className="flex flex-col md:flex-row font-sans gap-2 md:gap-5 text-[clamp(13px,1vw,16px)] mb-5 md:mb-10">
        <button className="text-main-text bg-title rounded-lg px-10 py-3 hover:bg-red cursor-pointer transition-all">Ver Proyectos</button>
        <button className="md:w-fit text-gray-text border-1 border-main-border rounded-lg px-10 py-3 hover:border-main-text hover:text-main-text cursor-pointer transition-all">Conversemos</button>
      </div>
      <div className='hidden sm:grid lg:grid-cols-[30%_30%]'>
        <LandingCard number='01' name='Tecnologías' text='El core de mi trabajo. Arquitectura y stack MERN/PERN.' to='#technologies' />
        <LandingCard number='02' name='Proyectos' text='Código en producción. Soluciones web reales y escalables.' to='#technologies' />
        <LandingCard number='03' name='Sobre mí' text='Mi trayectoria, mentalidad y enfoque como Ingeniero.' to='#technologies' />
        <LandingCard number='04' name='Contacto' text='Conversemos. Listo para nuevos desafíos técnicos.' to='#technologies' />
      </div>
    </section>
  )
}