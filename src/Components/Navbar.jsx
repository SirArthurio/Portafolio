import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla la visibilidad del menú en pantallas pequeñas
  const navigate = useNavigate();

  const menuItems = [
    { name: "Inicio", patch: "/Portafolio" },
    { name: "Sobre mi", patch: "/SobreMi" },
    { name: "Proyectos", patch: "/Proyectos" },

  ];

  const handleMenuClick = (patch) => {
    setSelectedMenu(patch);
    setIsMenuOpen(false);
    navigate(patch);
  };

  return (
    <div className="bg-[#F5F5DC]">
      <div className="sm:hidden flex justify-between items-center px-4 py-2 border-b border-gray-400">
        <h1 className="text-lg font-bold">Luis</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          {isMenuOpen ? "Cerrar" : "Abrir"}
        </button>
      </div>

      <nav
  className={`sm:flex justify-stretch sm:space-x-4 text-gray-600 sm:border-b sm:border-gray-400 ${
    isMenuOpen ? "block" : "hidden"
  } sm:block`}
>
  <div className="flex flex-col sm:flex-row w-full">
    {menuItems.map((item) => (
      <button
        key={item.name}
        className={`flex-grow rounded-lg p-2 m-1 text-center ${
          selectedMenu === item.patch
            ? "border-b-2 border-amber-950 rounded-none"
            : "hover:bg-[#252525] hover:text-white"
        }`}
        onClick={() => handleMenuClick(item.patch)}
      >
        <Link to={item.patch}>{item.name}</Link>
      </button>
    ))}
  </div>
</nav>

    </div>
  );
};
