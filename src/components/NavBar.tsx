"use client"

import Image from "next/image"

import { useState } from "react"

import MenuIcon from "@/public/menu-icon.svg"
import DownloadIcon from "@/public/download-icon.svg"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Menu principal del navbar //
    <>
      <nav className="flex fixed align-center w-full h-[7%] px-2 py-3 z-1000 bg-[var(--gray-background)]">
        <a href="#landing" className="flex justify-center items-center px-5 py-2 bg-[var(--dark-gray-background)] border-2 border-[var(--primary-blue)] rounded-[100px] text-white">
          <h1 className="font-bold text-[clamp(12px,0.8vw,18px)]">Ariel Escobar</h1>
        </a>
        <div className="hidden sm:flex justify-center items-center gap-8 ml-[3%] text-white">
          <a href="#technologies" className="hover:text-[var(--primary-blue)] border-b-3 border-transparent hover:border-b-[var(--primary-blue)] transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Tecnologías</a>
          <a href="#projects" className="hover:text-[var(--primary-blue)] border-b-3 border-transparent hover:border-b-[var(--primary-blue)] transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Proyectos</a>
          <a href="#about" className="hover:text-[var(--primary-blue)] border-b-3 border-transparent hover:border-b-[var(--primary-blue)] transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Sobre Mí</a>
          <a href="#contact" className="hover:text-[var(--primary-blue)] border-b-3 border-transparent hover:border-b-[var(--primary-blue)] transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Contacto</a>
        </div>
        <a href="/CV-C.pdf" download="CV-Ariel-Escobar.pdf" target="_blank" className="flex justify-center items-center ml-auto mr-2 py-1 px-3 bg-[var(--primary-blue)] rounded-xl hidden sm:flex hover:shadow-[0_0_15px_var(--primary-blue)] hover:cursor-pointer transition-all duration-100">
          <h1 className="text-white text-[clamp(13px,0.7vw,16px)]">Descargar CV</h1>
          <Image src={DownloadIcon} alt="Download Icon" width={28} height={28} />
        </a>
        <div className="flex sm:hidden align-center justify-center ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={MenuIcon} alt="Menu Icon" width={34} height={34} className="hover:cursor-pointer hover:opacity-75" />
        </div>
      </nav>

      {/* Menu responsivo del navbar */}
      {isMenuOpen && (
        <nav className="absolute align-center w-[95%] h-fit top-[75px] left-[2.5%] rounded-sm sm:hidden  flex-col px-2 py-3 bg-[var(--gray-background)] z-1000">
          <div className="flex flex-col justify-center items-center gap-4 text-white">
            <a href="#technologies" className="flex justify-center items-center hover:text-[var(--primary-blue)] w-full h-10 hover:bg-[var(--dark-gray-background)] rounded-sm text-center transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Tecnologías</a>
            <a href="#projects" className="flex justify-center items-center hover:text-[var(--primary-blue)] w-full h-10 hover:bg-[var(--dark-gray-background)] rounded-sm text-center transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Proyectos</a>
            <a href="#about" className="flex justify-center items-center hover:text-[var(--primary-blue)] w-full h-10 hover:bg-[var(--dark-gray-background)] rounded-sm text-center transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Sobre Mí</a>
            <a href="#contact" className="flex justify-center items-center hover:text-[var(--primary-blue)] w-full h-10 hover:bg-[var(--dark-gray-background)] rounded-sm text-center transition-all duration-200 text-[clamp(13px,0.8vw,20px)]">Contacto</a>
            <a href="/CV-C.pdf" download="CV-Ariel-Escobar.pdf" target="_blank" className="flex justify-center items-center py-1 px-3 w-full bg-[var(--primary-blue)] rounded-sm hover:shadow-[0_0_12px_var(--primary-blue)] hover:cursor-pointer transition-all duration-100">
              <h1 className="text-white text-[clamp(13px,0.7vw,16px)]">Descargar CV</h1>
              <Image src={DownloadIcon} alt="Download Icon" width={28} height={28} />
            </a>
          </div>
        </nav>
      )}
    </>
  )
}