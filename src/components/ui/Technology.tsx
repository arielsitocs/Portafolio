import TechnologyTypes from "../../types/Technology";

import Image from "next/image";

export default function Technology({ name, icon, color }: TechnologyTypes) {
  return (
    <div
      className="flex flex-col justify-center items-center h-[120px] sm:h-[150px] bg-[var(--gray-background)] p-10 rounded-lg hover:cursor-pointer hover:translate-y-[-5px] hover:opacity-70 transition-all"
      style={{ boxShadow: `0 5px 0px 0px ${color}` }}
    >
      <div className="flex md:flex-row flex-col items-center gap-4 text-white">
        <Image src={icon} alt={name} width={56} height={62} className="md:w-[56px] md:h-[62px] w-[40px] h-[46px]" />
        <h1>{name}</h1>
      </div>
    </div>
  )
}