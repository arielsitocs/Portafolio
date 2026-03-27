"use client"
import { useEffect, useState } from "react";

export default function CursorGlow() {
  // Iniciamos fuera de la pantalla para que no aparezca de golpe en el centro
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // z-0 lo manda al fondo, mix-blend-screen hace que la luz se fusione mejor con lo oscuro
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen">
      <div
        // w-[600px] crea un círculo gigante. 
        // blur-[120px] lo difumina tanto que parece una nube.
        // opacity-20 o opacity-30 lo hace súper sutil.
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 transition-transform duration-100 ease-out"
        style={{
          // Restamos la mitad (300) para que el cursor quede exactamente en el centro de la nube
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
          // ¡Aquí está la magia! Usamos tu gradiente oficial
          background: "var(--primary-gradient)", 
        }}
      />
    </div>
  );
}