import Image from "next/image";

import ProjectTypes from "../../types/Project";

import GitHubIcon from "@/public/github_icon.svg";
import LinkIcon from "@/public/link-icon.svg";

export default function Project({ name, description, image, technologies, repoLink, liveLink }: ProjectTypes) {
  return (
    <div className="flex flex-col gap-4 bg-[var(--gray-background)] rounded-lg p-4">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={550} height={550} />
      </div>
      <div>
        <h2 className="text-white font-medium text-[clamp(16px,1.2vw,25px)]">{name}</h2>
        <p className="text-[var(--gray-text)] font-medium">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {
          technologies.map((tech) => (
            <div key={tech} className="bg-[var(--dark-gray-background)] text-white rounded-md px-4 py-1 text-[15px]">{tech}</div>
          ))
        }
      </div>
      <div className="flex gap-4 text-white flex-wrap">
        <div className="flex items-center gap-2 bg-[var(--secondary-background)] rounded-md px-4 py-2 hover:bg-[var(--primary-blue)] hover:cursor-pointer transition-all">
          <Image src={LinkIcon} alt={name} width={28} height={28} className="fill-white" />
          <a href={liveLink}>Demostración</a>
        </div>
        <div className="flex items-center gap-2 bg-[var(--secondary-background)] rounded-md px-4 py-2 hover:bg-[var(--primary-blue)] hover:cursor-pointer transition-all">
          <Image src={GitHubIcon} alt={name} width={28} height={28} />
          <a href={repoLink}>Repositorio</a>
        </div>
      </div>
    </div>
  )
}