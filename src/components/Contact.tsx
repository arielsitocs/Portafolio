"use client"

import emailjs from "@emailjs/browser";

import { useRef } from "react";

import { useState } from "react";

import { toast } from "sonner";


export default function Contact() {
  // Se crea una referencia al formulario para poder enviar el correo y reiniciarlo despues //
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(() => {
      toast.success("Correo enviado");
      formRef.current?.reset();
      setSending(false);
    }, (error) => {
      toast.error("Error al enviar el correo");
      console.error(error);
      setSending(false);
    });
  }

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-2 md:px-10 p-30 border-b-2 border-main-border">
      <div className="w-fit p-2 md:p-15 bg-secondary-background rounded-lg border-1 border-main-border">
        <div className="flex flex-col gap-4 text-center">
          <h3 className="font-mono text-title">-- CONTACTO</h3>
          <h1 className="text-main-text font-sans font-medium text-[27px]">¿Algo captó tu atención?</h1>
          <p className="font-sans text-gray-text">Envíame un mensaje y conversemos sobre tu próximo proyecto.</p>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5 mt-10">
          <div>
            <h3 className="font-mono text-sm text-gray-text mb-1">NOMBRE</h3>
            <input type="text" name="user_name" placeholder="Tu nombre completo" className="w-full bg-secondary-border border-1 border-main-border rounded-lg px-3 py-2 text-gray-text" required />
          </div>
          <div>
            <h3 className="font-mono text-sm text-gray-text mb-1">CORREO</h3>
            <input type="email" name="user_email" placeholder="Tu correo electrónico" className="w-full bg-secondary-border border-1 border-main-border rounded-lg px-3 py-2 text-gray-text" required />
          </div>
          <div>
            <h3 className="font-mono text-sm text-gray-text mb-1">MENSAJE</h3>
            <textarea name="message" placeholder="¿Como te puedo ayudar hoy?" rows={5} className="w-full resize-none bg-secondary-border border-1 border-main-border rounded-lg px-3 py-2 text-gray-text" required />
          </div>
          <div className="mt-5">
            <button type="submit" disabled={sending} className="w-full py-2 border-1 border-secondary-border rounded-lg text-main-text hover:bg-title cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}