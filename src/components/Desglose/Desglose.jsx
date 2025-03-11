import { useEffect, useState, useRef } from "react";
import { ItemDesglose } from "./ItemDesglose"
import Header from "./Header";
import { DataDesgloseContext } from "../Hooks/DataDesgloseContext"
import { calculateBarra } from "../../utils/calculatorDesglose";
import SideBarBarra from "./SideBarBarra";


    
export default function Desglose() {
    const isFirstRender = useRef(true);
    const [animation, setAnimation] = useState(false);
    const [renderAnimatioItem, setRenderAnimationItem] = useState(false);
    const [dataBarra, setDataBarra] = useState({});
    const [DataDesgloseState, setDataDesgloseState] = useState({});
    const [cantidadDesglose, setCantidadDesglose] = useState(2);
    const DesgloseArray = Array.from({ length: cantidadDesglose }, (_, index) => (index + 1).toString());

    function handleCantidad(cantidad) {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const toNumber = Number(cantidad);
        if (!isNaN(toNumber)) {
            setCantidadDesglose(toNumber);
        }
    }    

    function handleAnimation() {
        if (!renderAnimatioItem) {
            setAnimation(false);
            setRenderAnimationItem(true);
        } else {
            setAnimation(true);
            setTimeout(() => {
                setRenderAnimationItem(false);
            },[1000])
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const barraInfo = calculateBarra(DataDesgloseState);
        setDataBarra(barraInfo);        
    }, [DataDesgloseState]);

    

    return (
        <div className="flex flex-col">
            <Header changeCantidad={handleCantidad} cantidad={cantidadDesglose}  handleAnimation={handleAnimation}/>

            <DataDesgloseContext.Provider value={{ DataDesgloseState, setDataDesgloseState }}>
                <div className="grid grid-cols-4 ml-15 gap-y-[20px]">
                    {DesgloseArray.map((item) => (
                        <ItemDesglose
                            key={item}
                            number={item}
                        />
                    ))}
                </div>
            </DataDesgloseContext.Provider>
            {renderAnimatioItem && <SideBarBarra isExiting={animation} barraInfo={dataBarra}/>}
        </div>
    );
}
