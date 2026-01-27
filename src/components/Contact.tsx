import Image from "next/image";

import GmailIcon from "../../public/gmail.png";

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-fit px-4 lg:px-44 py-15 flex flex-col">
      <div className="grid md:grid-cols-[35%_70%] grid-cols-1 gap-10">
        <div className="flex flex-col justify-center items-center gap-1 text-white text-center">
          <h1 className="text-[clamp(24px,1.5vw,60px)] font-bold">¿Algo captó tu atención?</h1>
          <h1 className="text-[clamp(24px,1.4vw,60px)] font-bold">Envíame un correo aquí</h1>
          <p className="text-[var(--gray-text)] mt-2">Puedes enviarme un correo para contactarme, ya sea para comentar una idea o conocerme un poco más si te interesa trabajar conmigo.</p>
          <Image src={GmailIcon} alt="Gmail Icon" width={100} height={100} className="mt-5" />
        </div>
        <div>
          <form action="submit" className="flex flex-col gap-6 bg-[var(--gray-background)] p-5 rounded-lg">
            <input type="text" placeholder="Nombre Completo..." required className="bg-black text-white px-2 py-4 rounded-lg" />
            <input type="email" placeholder="Correo Electrónico..." required className="bg-black text-white px-2 py-4 rounded-lg" />
            <textarea placeholder="¿Cómo te puedo ayudar?" rows={6} required className="bg-black text-white px-2 py-4 rounded-lg resize-none" />
            <button type="submit" className="bg-[var(--gmail-orange)] text-white px-2 py-4 md:w-[70%] w-full self-center rounded-lg hover:opacity-80 hover:translate-y-[-6px] hover:cursor-pointer transition-all">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}