"use client";
import { useState } from "react";
import fondo from "../assets/fondo.png";
export default function Inicio() {
  const [message, setMessage] = useState("");
  const [lenguaje, setLenguaje] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const stats = [
    {
      name: "React",
      level: 3,
      exp: "12",
      area: "Front",
    },
    {
      name: "Node",
      level: 2,
      exp: "12",
      hp: "2,643/2,643",
      area: "Back",
    },
    {
      name: "Java",
      level: 1,
      exp: "6",
      area: "Back",
    },
    {
      name: "Mongo DB",
      level: 2,
      exp: "6",
      area: "Base de Datos",
    },
    {
      name: "MySQL",
      level: 2,
      exp: "6",
      area: "Base de Datos",
    },
    {
      name: "Github",
      level: 6,
      exp: "12",
      area: "Manejo de Versiones",
    },
  ];

  const handleMenuClick = (item) => {
    setLenguaje(item);
    setSelectedMenu(item);
    setMessage(`Tecnologia de ${item.area}`);
  };

  return (
    <div
      className="min-h-screen p-8 font-mono"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-[#454138]   ">
        <section className="border-b-2 border-current pb-2 mb-4">
          <h2
            className="text-4xl font-light tracking-widest "
            style={{
              textShadow: "4px 3px 0px gray",
            }}
          >
            TECNOLOGIAS
          </h2>
        </section>
        <div className="flex items-center space-x-2 text-sm">
          <span className="animate-pulse">■</span>
          <span>System Status: Online</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-1 bg-[#F5F5DC]">
            {stats.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item)}
                className={`w-full text-left px-4 py-2 transition-colors ${
                  lenguaje?.name === item.name
                    ? "bg-[#F5F5DC] "
                    : "hover:bg-[#252525] "
                } ${
                  selectedMenu?.name === item.name
                    ? " text-white bg-black"
                    : "active:bg-gray-200 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="bg-[#F5F5DC]  space-y-2 ">
            <div>
              <h2 className="bg-[#252525] text-white p-1"> Detalles</h2>
            </div>
            {lenguaje ? (
              <section className="p-4">
                <div className="flex justify-between">
                  <span>Nombre:</span>
                  <span>{lenguaje.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Proyectos:</span>
                  <span>{lenguaje.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>EXP:</span>
                  <span>{lenguaje.exp} Meses</span>
                </div>
              </section>
            ) : (
              <p className="text-center text-gray-500">
                Selecciona un lenguaje para ver detalles.
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 border-t border-b border-gray-400 py-2 px-4 min-h-[2.5rem]">
          {message}
        </div>
      </div>
    </div>
  );
}
