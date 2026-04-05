import Image from "next/image";

import ProjectTypes from "../../types/Project";

export default function Project({ name, description, number, type, image, technologies, repoLink, liveLink }: ProjectTypes) {
  return (
    <div className="flex flex-col md:flex-row p-3 md:p-6 bg-secondary-background max-w-[1200px] rounded-lg border-1 border-main-border gap-5">
      <div className="flex flex-col gap-3 md:w-[40%]">
        <h3 className="font-mono text-gray-text">{number} // {type}</h3>
        <h1 className="text-main-text font-sans text-2xl">{name}</h1>
        <p className="text-gray-text font-sans">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {
            technologies.map((t) => (
              <div key={t} className="p-2 font-mono text-gray-text text-sm border-1 border-main-border rounded-lg">{t}</div>
            ))
          }
        </div>
        <div className="flex gap-2 text-gray-text font-mono mt-auto">
          <a href={liveLink} className="hover:text-main-text transition-all">Demo</a>
          <a href={repoLink} className="hover:text-main-text transition-all">Repo</a>
        </div>
      </div>

      <div className="relative w-full md:flex-1 max-w-[500px] aspect-[16/10] border-1 border-main-border rounded-lg overflow-hidden bg-terciary-backgound ml-auto">
        <Image src={image} fill alt="Project Image" className="object-cover object-top" />
      </div>
    </div>
  )
}