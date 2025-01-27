import { useState, useEffect } from "react"

export function Card({ name, description, icon: Icon }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(
      () => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      },
      Math.random() * 10000 + 5000,
    ) 

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="border border-[#e2d9bc]/20 p-4 hover:bg-[#e2d9bc]/5 transition-all group relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-[#e2d9bc]/10 transition-opacity duration-200 ${isGlitching ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[#f0e6d2] group-hover:text-[#f0e6d2]">{name}</h3>
          <Icon className="w-6 h-6 text-[#e2d9bc]" />
        </div>
        <p className="text-[#e2d9bc]/60 text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e2d9bc]/20 transition-all duration-300"></div>
    </div>
  )
}

