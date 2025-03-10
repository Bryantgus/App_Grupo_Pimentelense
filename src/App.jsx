import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Inicio from "./components/Inicio/Inicio"
import Desglose from "./components/Desglose/Desglose";
import Cotizacion from "./components/Cotizacion/Cotizacion";

export default function App() {
  return (
    <Router>
      <div className="flex w-full">
        <SideBar />
        <div className="w-full ml-50 ">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/desglose" element={<Desglose />} />
            <Route path="/cotizacion" element={<Cotizacion />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
