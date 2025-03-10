import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [active, setActive] = useState("/inicio"); // Estado inicial con "/inicio"

  const handleSetActive = (path) => {
    setActive(path);
  };

  return (
    <div className="fixed flex flex-col top-0 left-0 w-50 bg-white h-full border-r">
      <div className="flex items-center justify-center h-14 border-b">
        <div>Grupo Pimentelense</div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <Link
              to="/inicio"
              onClick={() => handleSetActive("/inicio")}
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-300 text-gray-600 hover:text-gray-800 border-l-4 pr-6 ${
                active === "/inicio" ? "bg-gray-400 border-indigo-500 text-black" : "border-transparent"
              }`}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/desglose"
              onClick={() => handleSetActive("/desglose")}
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-300 text-gray-600 hover:text-gray-800 border-l-4 pr-6 ${
                active === "/desglose" ? "bg-gray-400 border-indigo-500 text-black" : "border-transparent"
              }`}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <img src="/window.svg" className="w-5 h-5" alt="" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Desglose</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cotizacion"
              onClick={() => handleSetActive("/cotizacion")}
              className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-300 text-gray-600 hover:text-gray-800 border-l-4 pr-6 ${
                active === "/cotizacion" ? "bg-gray-400 border-indigo-500 text-black" : "border-transparent"
              }`}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <img src="/factura.png" className="w-5 h-5" alt="" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Cotización</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
