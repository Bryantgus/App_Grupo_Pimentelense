//This function allows to enter just numbers spaces and the simbol /
export function filterValuesInput(value, clase) {
    const widthHeightPattern = /^[0-9\s/]+$/;
        if (clase === "number"){
            return {claseKey: clase,
                    valueKey: value
            };
        } else if ((clase === "ancho" || clase === "alto") && (value === "" || widthHeightPattern.test(value))) {
            return {claseKey: clase,
                    valueKey: value
            };
        }
    return null;

}

/*This function manage the change of type of Desgloses in the app */
export function changeTypeDesglose(e) {
    const value = e.target.textContent;
        // Mapeo de cambios
        const typeDesglose = {
            "p65": "trad.",
            "trad.": "p65",
            "2v": "3v",
            "3v": "2v"
        };

        const isMaterial = value === "trad." || value === "p65";
        return [isMaterial, typeDesglose[value]]

}

//This function allows to enter just numbers spaces and the simbol /
export function desgloseInputFilter(value, clase) {
    const widthHeightPattern = /^[0-9\s/]+$/;
        if (clase === "number"){
            return {claseKey: clase,
                    valueKey: value
            };
        } else if ((clase === "ancho" || clase === "alto") && (value === "" || widthHeightPattern.test(value))) {
            return {claseKey: clase,
                    valueKey: value
            };
        }
    return null;

}