import { useEffect, useState, useRef } from "react";
import { Terminal, Briefcase, Code, Cpu, Zap } from "lucide-react";
import { Card } from "../Components/Cards";
import foto from "../assets/ImagenesProyetos/foto.jpg";
import { Navbar } from "../Components/Navbar";
import { Proyectos } from "../Components/proyectos";

export default function Page() {
  const [glitchText, setGlitchText] = useState(false);
 
  const observerRef = useRef(null);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);

    return () => {
      clearInterval(glitchInterval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const jobs = [
    {
      title: "Back-End Dev",
      date: "Actualmente...",
    },
  ];


  const technologies = [
    {
      name: "React",
      description: "Biblioteca para construir interfaces de usuario",
      icon: Zap,
    },
    {
      name: "Mongo DB",
      description: "Base de datos no relacional",
      icon: Zap,
    },
    {
      name: "MySql",
      description: "Base de datos relacional",
      icon: Zap,
    },
    {
      name: "JavaScript",
      description: "Lenguaje de programación interpretado,",
      icon: Zap,
    },
    {
      name: "TypeScript",
      description: "JavaScript con sintaxis para tipos",
      icon: Code,
    },
    {
      name: "Tailwind CSS",
      description: "Framework CSS de utilidades",
      icon: Cpu,
    },
    {
      name: "Git-Hub",
      description: "Framework CSS de utilidades",
      icon: Cpu,
    },
    {
      name: "Node js",
      description:
        "Entorno en tiempo de ejecución, de código abierto, para la capa del servidor",
      icon: Cpu,
    },
    {
      name: "Express",
      description: "Framework de Node js",
      icon: Cpu,
    },
  ];

 

  return (
    <div className="min-h-screen bg-[#2b2b2b] text-[#e2d9bc] font-mono relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjIiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiLz48L3N2Zz4=')] opacity-20"></div>
      <Navbar/>
      <header className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">LuIs RaMos AlfAro</h1>
        <div>
          <img
            className="inline-block size-12 rounded-full ring-2 ring-white"
            src={foto}
            alt="Luis Ramos"
          />
          <p className="text-center mt-4">
            Programador Full-Stack estudiante de ingeniería de sistemas de la
            Unicesar Valledupar, Cesar.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section id="experiencia" className="mb-20">
          <h2
            className={`text-2xl font-bold mb-10 flex items-center gap-2 ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <Briefcase className="w-6 h-6" />
            Experiencia laboral
          </h2>

          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#e2d9bc]/20"></div>

            {jobs.map((job, i) => (
              <div key={i} className="ml-8 mb-12 relative group">
                <div className="absolute -left-10 top-2 w-4 h-4 rounded-full border-2 border-[#e2d9bc] bg-[#2b2b2b] group-hover:bg-[#e2d9bc] transition-colors"></div>
                <div className="border border-[#e2d9bc]/20 p-6 hover:bg-[#e2d9bc]/5 transition-colors">
                  <h3 className="text-xl font-bold text-[#f0e6d2] mb-1">
                    {job.title}
                  </h3>
                  <div className="text-[#e2d9bc]/80 mb-2">
                    {job.company} · {job.date}
                  </div>
                  <p className="text-[#e2d9bc]/60">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="mb-20">
          <h2
            className={`text-2xl font-bold mb-10 flex items-center gap-2 ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <Code className="w-6 h-6" />
            Proyectos
          </h2>
            <Proyectos/>
      
        </section>

        <section id="tecnologias" className="mb-20">
          <h2
            className={`text-2xl font-bold mb-10 flex items-center gap-2 ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <Cpu className="w-6 h-6" />
            Tecnologías
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} {...tech} />
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="mb-20">
          <h2
            className={`text-2xl font-bold mb-10 flex items-center gap-2 ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <Terminal className="w-6 h-6" />
            Sobre mí
          </h2>
          <div className="border border-[#e2d9bc]/20 p-6">
            <p className="text-[#e2d9bc]/80 mb-4">
              Soy un desarrollador apasionado por la creación de experiencias
              web únicas y eficientes. Mi enfoque se centra en la optimización
              del rendimiento y la accesibilidad, siempre buscando nuevas formas
              de mejorar la interacción del usuario con la tecnología.
            </p>
            <p className="text-[#e2d9bc]/80">
              Fuera del mundo del código, disfruto explorando nuevas
              tecnologías, contribuyendo a proyectos de código abierto y
              compartiendo conocimientos con la comunidad de desarrolladores.
            </p>
          </div>
        </section>

        <section id="contacto" className="mb-20">
          <h2
            className={`text-2xl font-bold mb-10 flex items-center gap-2 ${
              glitchText ? "animate-glitch" : ""
            }`}
          >
            <Terminal className="w-6 h-6" />
            Contacto
          </h2>
          <div className="border border-[#e2d9bc]/20 p-6">
            <p className="text-[#e2d9bc]/80 mb-4">
              ¿Interesado en colaborar o tienes alguna pregunta? No dudes en
              contactarme:
            </p>
            <ul className="list-disc list-inside text-[#e2d9bc]/60">
              <li>Email: luisenriqueramosalfaro@gmail.com</li>
              <li>
                <a
                  href="https://github.com/SirArthurio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luis-ramos-alfaro-aa2078248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
