import Image from "next/image"

import LandingCardTypes from "@/src/types/LandingCard"

export default function LandingCard({ number, name, text, to }: LandingCardTypes) {
    return (
        <a href={to} className="w-full">
            <div className="flex flex-col p-2 md:p-5 bg-secondary-background border-1 border-secondary-border hover:border-title transition-all">
                <h1 className="font-mono text-title">{number} //</h1>
                <h1 className="text-main-text">{name}</h1>
                <p className="text-gray-text text-sm">{text}</p>
            </div>
        </a>
    )
}