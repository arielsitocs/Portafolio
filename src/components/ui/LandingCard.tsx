import Image from "next/image"

import LandingCardTypes from "@/src/types/LandingCard"

import ArrowRight from "@/public/arrow-right-icon.svg";

export default function LandingCard({ number, name, text, to }: LandingCardTypes) {
    return (
        <a href={to} className="w-full">
            <div className="group flex flex-col gap-3 text-white p-3 rounded-xl bg-gray-background font-semibold border-2 border-dark-gray-background hover:border-gray-700 cursor-pointer hover:translate-y-[-5px] hover:bg-primary-gradient transition-all">
                <h1 className="text-gray-text text-[clamp(15px,1vw,16px)]">{number} // {name}</h1>
                <p className="text-dark-text group-hover:text-gray-text text-[clamp(15px,1vw,16px)]" >{text}</p>
                <Image src={ArrowRight} width={24} height={24} alt="Arrow Right Icon" className="ml-auto" />
            </div>
        </a>
    )
}