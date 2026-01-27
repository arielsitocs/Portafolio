import Image from "next/image";

import InfoIcon from "../../public/information.png";
import Ariel from "../../public/Ariel.jpeg";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-fit px-4 lg:px-44 py-15 flex flex-col bg-[var(--secondary-background)] overflow-hidden">

      <div className="flex-none">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-[clamp(23px,1.7vw,100px)]">
            Conóceme un Poco
          </h1>
          <Image src={InfoIcon} alt="Code Icon" width={50} height={50} />
        </div>

        <div>
          <p className="text-gray-400 mt-2">
            Aquí puedes saber un poco mas sobre mi, acerca de lo que pienso y mi proyección hacia el futuro.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-10 md:mt-20">
        <div className="flex flex-col md:mb-0 mb-10 items-center gap-4 text-white flex-none">
          <h1 className="text-[clamp(24px,1.7vw,60px)] font-bold"><span className="text-[var(--primary-blue)]">A</span>riel <span className="text-[var(--primary-blue)]">E</span>scobar</h1>
          <Image src={Ariel} alt="Ariel Escobar" className="rounded-full shadow-[15px_0px_0px_0px_var(--primary-blue)] md:w-[270px] md:h-[270px] w-[200px] h-[220 px]" />
        </div>
        <div className="flex flex-col gap-4 text-white md:ml-10">
          <h1 className="font-bold text-[clamp(24px,1.3vw,40px)]">Conectando la tecnología con las necesidades reales de las personas.</h1>
          <p className="md:w-[80%] w-[100%] text-[clamp(16px,1.2vw,18px)]">No me conformo con que la tecnología simplemente "funcione"; quiero que aporte valor real. Soy un apasionado del desarrollo tecnológico, pero siempre con los pies en la tierra.</p>
          <p className="md:w-[80%] w-[100%] text-[clamp(16px,1.2vw,18px)]">Mi trabajo en el desarrollo se centra en entender los "por qué" antes de saltar a los "cómo". Me motiva transformar desafíos complejos en plataformas y herramientas que sean fáciles de usar y que generen un impacto real. Soy un firme creyente en el aprendizaje constante, en escuchar activamente y en que, trabajando juntos, podemos usar la tecnología para construir un futuro mejor.</p>
        </div>
      </div>

    </section>

  )
}
