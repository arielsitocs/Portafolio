"use client"

import Image from "next/image"

import { useState } from "react"

import ArrowDownIcon from "@/public/arrow-down-icon.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Menu principal del navbar //
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between w-full h-[70px] border-b-1 border-main-border px-4 md:px-8 z-1000 bg-page-background/90 backdrop-blur">
        <div>
          <a href="#landing" className="text-main-text text-lg font-mono">AE</a>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-10 text-gray-text font-sans text-[15px]">
          <a href="#technologies" className="hover:text-main-text transition-all">Tecnologias</a>
          <a href="#projects" className="hover:text-main-text transition-all">Proyectos</a>
          <a href="#about" className="hover:text-main-text transition-all">Sobre Mi</a>
          <a href="#contact" className="hover:text-main-text transition-all">Contacto</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-text border-1 px-3 py-2 rounded-lg border-secondary-border"
          >
            Menu
          </button>
          <a
            href="/Ariel_Escobar_CV.pdf"
            download="CV_Ariel_Escobar"
            className="flex justify-center items-center border-1 px-3 py-2 rounded-lg border-secondary-border hover:bg-secondary-background cursor-pointer"
          >
            <Image src={ArrowDownIcon} width={20} height={20} alt="Download Icon" />
            <span className="text-main-text">CV</span>
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 right-0 z-[999] bg-page-background border-b border-main-border px-4 py-4 flex flex-col gap-3 text-gray-text">
          <a href="#technologies" className="hover:text-main-text transition-all" onClick={() => setIsMenuOpen(false)}>Tecnologias</a>
          <a href="#projects" className="hover:text-main-text transition-all" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
          <a href="#about" className="hover:text-main-text transition-all" onClick={() => setIsMenuOpen(false)}>Sobre Mi</a>
          <a href="#contact" className="hover:text-main-text transition-all" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        </div>
      )}
    </>
  )
}