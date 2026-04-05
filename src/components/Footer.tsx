
export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full h-[60px] bg-secondary-background">
      <p className="text-gray-text font-sans text-[clamp(12px,2vw,16px)]">Ariel Escobar — Software Engineer © {new Date().getFullYear()} • Hecho con Next.js</p>
    </footer>
  )
}