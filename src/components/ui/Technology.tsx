import TechnologyTypes from "../../types/Technology";

export default function Technology({ name, icono: Icon, iconSize = 30, iconColor = "var(--main-text)", color }: TechnologyTypes) {
  return (
    <div className="flex items-center bg-secondary-background w-full p-3 md:p-5 hover:bg-main-border">
      <div className="flex items-center justify-center rounded-md bg-alternative-background p-2" title={name}>
        <Icon size={iconSize} style={{ color: iconColor }} aria-hidden="true" />
      </div>
      <div>
        <h1 className="text-main-text font-medium ml-2">{name}</h1>
      </div>
    </div>
  )
}