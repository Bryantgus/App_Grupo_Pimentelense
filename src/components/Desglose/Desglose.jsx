import { useState } from "react";
import ItemDesglose from "./ItemDesglose"
import Header from "./Header";
import { DataDesglose } from "./DataDesgloseContext"
    
export default function Desglose() {
    const [DataDesgloseState, setDataDesgloseState] = useState({});
    const [cantidadDesglose, setCantidadDesglose] = useState(1);
    const DesgloseArray = Array.from({ length: cantidadDesglose }, (_, index) => (index + 1).toString());
    
    function handleCantidad(cantidad) {
        const toNumber = Number(cantidad);
        setCantidadDesglose(toNumber)
    }
    return (
        <div className="flex flex-col">
            <Header handleCantidad={handleCantidad}/>

            <DataDesglose.Provider value={{DataDesgloseState, setDataDesgloseState}}>
                <div className="grid grid-cols-4 ml-15">
                    {DesgloseArray.map((item, index) => (
                        <ItemDesglose 
                            key={index}
                            number={item}/>                     
                    ))}
                </div>
            </DataDesglose.Provider>
                
        </div>
    )
}