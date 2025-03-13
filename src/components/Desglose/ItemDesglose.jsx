import { useState, useEffect, useContext, useCallback } from "react";
import React from "react";
import ItemInput from "./ItemInput";
import ItemResult from "./ItemResult";
import calculateDesglose from "../../utils/calculatorDesglose";
import { filterValuesInput, changeTypeDesglose } from "../../utils/manageEspecialCases";
import { DataDesgloseContext } from "../../Hooks/DataDesgloseContext";
import useDebounce from "../../Hooks/useDeounce";

const ItemDesglose = React.memo(({ number }) => {  
    console.log("Render ItemDesglose");
    
    const { DataDesgloseState, setDataDesgloseState } = useContext(DataDesgloseContext);
    const [inputNumber, setInputNumber] = useState(number);
    const [measures, setMeasures] = useState({ ancho: "", alto: "" });
    const debouncedMeasures = useDebounce(measures, 500);

    const [typeDesglose, setTypeDesglose] = useState({ material: "p65", vias: "2v" });

    const [result, setResult] = useState({ rc: "", ruleta: "", lateral: "", jamba: "", can: "", cal: "" });

    const updateValues = useCallback((value, clase) => {
        const { claseKey, valueKey } = filterValuesInput(value, clase);
        if (claseKey === null) return;
        if (claseKey === "number") {
            setInputNumber(valueKey);
        } else {
            setMeasures(prev => ({ ...prev, [claseKey]: valueKey }));
        }
    }, []);

    const handleChangeTypeDesglose = useCallback((e) => {
        const [isMaterial, type] = changeTypeDesglose(e);
        setTypeDesglose(prev => ({ ...prev, [isMaterial ? 'material' : 'vias']: type }));
    }, []);

    useEffect(() => {
        const { ancho, alto } = debouncedMeasures;
        if (ancho === "" || alto === "") return;
        try {
            let desgloseTipo = `${typeDesglose.material} ${typeDesglose.vias}`;
            let resultsCalculates = calculateDesglose(ancho, alto, desgloseTipo);
            setResult(resultsCalculates);
            setDataDesgloseState(prev => ({ ...prev, [number]: { debouncedMeasures, resultsCalculates, typeDesglose } }));
        } catch (e) {
            console.error(e);
        }
    }, [debouncedMeasures, typeDesglose, number, setDataDesgloseState]);

    return (
        <div className="bg-neutral-400 p-2 rounded-[8px] border-stone-600 border-1 w-[215px]">
            <ItemInput label="N°" inputValue={inputNumber} number={number} id={`number${number}`} type="number" changeInput={updateValues} col={false} />
            <div className="flex gap-2">
                <ItemInput label="Ancho" inputValue={measures.ancho} number={number} id={`ancho${number}`} type="ancho" changeInput={updateValues} col={true} />
                <ItemInput label="Alto" inputValue={measures.alto} number={number} id={`alto${number}`} type="alto" changeInput={updateValues} col={true} />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <ItemResult label="RC" value={result.rc} />
                <ItemResult label="Ruleta" value={result.ruleta} />
                <ItemResult label="Lateral" value={result.lateral} />
                <ItemResult label="Jamba" value={result.jamba} />
                <ItemResult label="C.AN" value={result.can} />
                <ItemResult label="C.AL" value={result.cal} />
            </div>
            <div className="flex gap-2 mt-2">
                <button onClick={handleChangeTypeDesglose} className="font-bold hover:bg-gray-400 flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-stone-400">
                    {typeDesglose.material}
                </button>
                <button onClick={handleChangeTypeDesglose} className="font-bold hover:bg-gray-400 flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-stone-400">
                    {typeDesglose.vias}
                </button>
            </div>
        </div>
    );
}, (prevProps, nextProps) => prevProps.number === nextProps.number);

export default ItemDesglose;
