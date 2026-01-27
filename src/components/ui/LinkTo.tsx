import LinkToTypes from "../../types/LinkTo";

import Image from "next/image";

export default function LinkTo({ href, icon }: LinkToTypes) {
  return (
    <a href={href} className="flex items-center bg-[var(--gray-background)] rounded-xl p-2 hover:bg-[var(--primary-blue)] hover:shadow-[0_0_10px_var(--primary-blue)] transition-all duration-200 cursor-pointer">
      <Image src={icon} alt="Link Icon" width={32} height={32} />
    </a>
  )
}