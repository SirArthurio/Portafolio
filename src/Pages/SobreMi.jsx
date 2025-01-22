"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export const SobreMi = () => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const tabs = [
    {
      title: "Info. Basica",
      content: [
        { label: "Nombre", value: "Luis Ramos Alfaro" },
        { label: "Rol", value: "Desarrollador Full-Stack" },
        { label: "Estado", value: "Activo" },
        { label: "Ubicacion", value: "Valledupar,Cesar" },
        {label:"Telefono",value:"(+57) 3014343208"},
        {label:"Github:",value:"https://github.com/SirArthurio"},
        {label:"Linkedin",value:"https://www.linkedin.com/in/luis-ramos-alfaro-aa2078248/"}
      ],
    },
    {
      title: "Habilidades",
      content: [
        { label: "Comunicacion", value: "Level 8" },
        { label: "Resolucion de Problemas", value: "Level 7" },
        { label: "Creatividad", value: "Level 9" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#dad4bb] text-[#454138] relative overflow-hidden font-mono">
      {showGlitch && (
        <div className="absolute inset-0 bg-white/20 z-50 animate-pulse" />
      )}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <header className="mb-12">
          <div className="border-b-2 border-current pb-2 mb-4">
            <h1 className="text-4xl font-light tracking-widest"
             style={{
                textShadow: "4px 3px 0px gray",
              }}>
              ABOUT UNIT://[Luis Ramos]
            </h1>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="animate-pulse">■</span>
            <span>System Status: Online</span>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <nav className="space-y-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`w-full text-left px-4 py-2 hover:bg-black/10 transition-colors flex items-center space-x-2
                  ${selectedTab === index ? "bg-black/10" : ""}`}
              >
                <ChevronRight
                  className={`w-4 h-4 transition-transform
                  ${selectedTab === index ? "rotate-90" : ""}`}
                />
                <span>{tab.title}</span>
              </button>
            ))}
          </nav>

          <div className="md:col-span-3 bg-black/5 p-6 min-h-[400px]">
            <div className="space-y-6">
              {tabs[selectedTab].content.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 border-b border-black/10 pb-4"
                >
                  <div className="text-sm opacity-70">{item.label}</div>
                  <div className="font-light tracking-wide">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
