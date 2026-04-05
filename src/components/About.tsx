import Image from "next/image";

import Ariel from "../../public/Ariel.jpeg";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col justify-center px-2 md:px-10 py-50 border-b-2 border-main-border">
      <div className="text-main-text font-sans font-medium">
        <h3 className="font-mono font-normal text-title mb-4">-- SOBRE MÍ</h3>
        <h1 className="text-[clamp(20px,5vw,40px)]">Ariel Escobar<span className="text-title">.</span></h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-5">

        <div className="">
          <div className="flex flex-col gap-3">
            <h1 className="text-main-text text-2xl">Conectando la <span className="text-title">tecnología</span> con <span className="text-red">las necesidades</span> reales de las personas.</h1>
            <p className="text-gray-text max-w-full lg:max-w-[50%]">No me conformo con que la tecnología solo funcione, quiero que aporte <span>valor real</span>. Me encanta el desarrollo, pero siempre con los pies en la tierra.
              Mi trabajo se centra en entender el <span className="text-main-text">"por qué"</span> antes de saltar al "cómo". Me motiva transformar desafíos complejos en plataformas fáciles de usar que generen un <span className="text-main-text">impacto real</span>.
              Creo firmemente en el aprendizaje constante y en que, trabajando juntos, podemos usar la tecnología para hacer lo imposible, posible.</p>
          </div>
        </div>
      </div>
    </section>

  )
}
