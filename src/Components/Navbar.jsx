import { Link, useNavigate } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
import { Menu } from "lucide-react";


export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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
  const navItems = [
    "experiencia",
    "proyectos",
    "tecnologias",
    "sobre-mi",
    "contacto",
  ];
  observerRef.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    observerRef.current.observe(section);
  });
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4">
      <div className="bg-[#2b2b2b]/90 backdrop-blur-sm border border-[#e2d9bc]/20 rounded-full px-6 py-3 flex items-center justify-between">
        <button
          className="text-[#e2d9bc] md:hidden"
          onClick={() => setNavOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div
          className={`flex-col md:flex-row gap-6 md:gap-6 md:flex transition-all duration-300 md:static absolute top-full md:top-0 left-0 right-0 md:translate-x-0 ${
            navOpen ? "flex" : "hidden"
          } bg-[#2b2b2b] md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:text-[#f0e6d2] transition-colors relative group ${
                activeSection === item ? "text-[#f0e6d2]" : ""
              }`}
              onClick={() => setNavOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#f0e6d2] transition-all ${
                  activeSection === item
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
