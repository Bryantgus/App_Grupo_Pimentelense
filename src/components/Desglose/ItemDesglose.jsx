import { useState, useEffect, useContext } from "react"
import DataDesglose from "./Desglose"
import ItemInput from "./ItemInput"
import ItemResult from "./ItemResult"
import calculateDesglose from "../../utils/calculatorDesglose";
import { filterValuesInput, changeTypeDesglose } from "../../utils/manageEspecialCases";

export default function ItemDesglose(number) {
    const [DataDesgloseState, setDataDesgloseState] = useContext(DataDesglose);
    const [inputNumber, setInputNumber] = useState(number.number)
    const [measures, setMeasures] = useState({
        ancho: "",
        alto: ""
    });

    const [typeDesglose, setTypeDesglose] = useState({
        material: "p65",
        vias: "2v",
    });
    console.log(number);
    const [result, setResult] = useState({
        rc: "",
        ruleta: "",
        lateral: "",
        jamba: "",
        can: "",
        cal: ""
    });

    function updateValues(value, clase) {
        const {claseKey, valueKey} = filterValuesInput(value, clase);
        if (claseKey === null) {return;}
        if (claseKey === "number"){
            setInputNumber(valueKey);
        } else {
            setMeasures(prev => ({
                ...prev,
                [claseKey]: valueKey
            }));
        }
    }

    function handlechangeTypeDesglose(e) {
        const [isMaterial, typeDesglose] = changeTypeDesglose(e);
        setTypeDesglose(prev => ({
            ...prev,
            [isMaterial ? 'material' : 'vias']: typeDesglose
        }));     
    }

    useEffect(() => {
        const { ancho, alto } = measures;
        if (ancho === "" || alto === "") { return; }
        try {
            let desgloseTipo = typeDesglose.material + " " + typeDesglose.vias;
            let resultsCalculates = calculateDesglose(ancho, alto, desgloseTipo);
            setResult(resultsCalculates);
            setDataDesgloseState({ number, measures, resultsCalculates, typeDesglose });
        } catch (e) {
            console.error(e); // Es recomendable agregar algún tipo de manejo de errores.
        }
    }, [measures, typeDesglose, number, setDataDesgloseState]); // Elimina `result` de las dependencias
    

    return (
        <div className="bg-stone-400 p-2 rounded-[8px] border-stone-600 border-1 w-[215px]">
            <ItemInput label={"N°"} inputValue={inputNumber} number={number.number} id={"number"} changeInput={updateValues} col={false}/>
            <div className="flex gap-2">
                <ItemInput label={"Ancho"} inputValue={measures.ancho} number={number.number} id={"ancho"} changeInput={updateValues} col={true}/>
                <ItemInput label={"Alto"} inputValue={measures.alto} number={number.number} id={"alto"} changeInput={updateValues} col={true}/>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <ItemResult label={"RC"} value={result.rc}/>
                <ItemResult label={"Ruleta"} value={result.ruleta}/>
                <ItemResult label={"Lateral"} value={result.lateral}/>
                <ItemResult label={"Jamba"} value={result.jamba}/>
                <ItemResult label={"C.AN"} value={result.can}/>
                <ItemResult label={"C.AL"} value={result.cal}/>
            </div>

            <div className="flex gap-2 mt-2">
                <button onClick={(e) => handlechangeTypeDesglose(e)} className="font-bold hover:bg-gray-400 flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-stone-400">{typeDesglose.material}</button>
                <button onClick={(e) => handlechangeTypeDesglose(e)} className="font-bold hover:bg-gray-400 flex justify-center items-center w-23 rounded-[7px] border-1 border-[black] bg-stone-400">{typeDesglose.vias}</button>
            </div>
        </div>
    )
}