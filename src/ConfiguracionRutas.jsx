import React from "react";
import  Inicio  from "./Pages/inicio.jsx";
import { Proyectos } from './Pages/Proyectos/Proyectos.jsx';
import {SobreMi} from "./Pages/SobreMi";

export const ConfiguracionRutas = [
  {
    path: "/Portafolio",
    element: <Inicio />,
  },
  {
    path: "/SobreMi",
    element: <SobreMi />,
  },
  {
    path:"/Proyectos",
    element:<Proyectos/>
  },
  
];
