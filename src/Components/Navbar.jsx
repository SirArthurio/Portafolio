import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

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
    <div className="bg-[#F5F5DC] relative">
     
      <div className="sm:hidden flex justify-between items-center px-4 py-2 border-b border-gray-400">
        <h1 className="text-lg font-bold">Luis</h1>
  
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          {isMenuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
        </button>
      </div>
  
     
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)} 
        ></div>
      )}
  
      <nav
        className={`fixed sm:relative top-0 left-0 sm:static w-full bg-[#F5F5DC] sm:bg-transparent z-40 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 sm:transition-none sm:translate-y-0`}
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:border-b sm:border-gray-400 text-gray-600">
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
}  