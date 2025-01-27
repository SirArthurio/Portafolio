import { useState } from "react";
import Liga from "../assets/ImagenesProyetos/Liga.jpg"

export const Proyectos = () => {
    const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      titulo: "Atlecesar",
      descripcion: "Propuesta para la liga de atletismo del cesar",
      estado: "Completado",
      completion: 100,
      link: "https://sirarthurio.github.io/LigaAtletismo/",
      tecnologias: "React js, Node js, express, mongo db",
    img:Liga
    },
    {
      id: 2,
      titulo: "Traveling Condor",
      descripcion: "Sistema de planificacion de rutas",
      estado: "En progreso",
      completion: 49,
      link: "https://github.com/javierdialf/Traveling-Condor",
      tecnologias: "React js, .Net, MySql",
      
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/5 border border-[#e2d9bc]/20 p-6 cursor-pointer hover:bg-black/10 transition-colors"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-xl font-light mb-2">{project.titulo}</h2>
            <p className="text-sm opacity-70 mb-4">{project.descripcion}</p>
            <div className="flex justify-between items-center text-sm">
              <span>{project.estado}</span>
              <span>{project.completion}%</span>
            </div>
            <div className="mt-2 bg-black/10 h-2">
              <div
                className="bg-current h-full transition-all duration-500"
                style={{ width: `${project.completion}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 text-white">
          <div className="bg-[#e2d9bc]/5 p-8 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-light mb-4">
              {selectedProject.titulo}
            </h2>
            <p className="mb-4">{selectedProject.descripcion}</p>
            <p className="mb-4">Tecnologias: {selectedProject.tecnologias}</p>
            <div className="flex justify-between items-center mb-2">
              <span>Estado: {selectedProject.estado}</span>
              <span>Completo: {selectedProject.completion}%</span>
            </div>
            <div className="bg-black/10 h-2 mb-4">
              <div
                className="bg-current h-full transition-all duration-500"
                style={{ width: `${selectedProject.completion}%` }}
              />
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={selectedProject.img}
                width={400}
                height={200}
                alt="Project"
                className="mb-4"
              />
            </div>
            <div className="grid grid-cols-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-[#e2d9bc]/5 px-4 py-2 hover:bg-black/20 transition-colors m-2"
              >
                Cerrar
              </button>
              <a
                href={
                  selectedProject.completion >= 50 ? selectedProject.link : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-black/10 px-4 py-2 hover:bg-black/20 transition-colors m-2 inline-block ${
                  selectedProject.completion < 50
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={(e) => {
                  if (selectedProject.completion < 50) {
                    e.preventDefault(); 
                  }
                }}
              >
                Vista previa
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
