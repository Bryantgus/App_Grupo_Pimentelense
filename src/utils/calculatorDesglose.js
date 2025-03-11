function toDecimal(mixedNumber) {
    let partes = mixedNumber.split(" ");
    let entero = 0;
    let fraccion = 0;

    if (partes.length === 2) {
        entero = parseInt(partes[0], 10);
        let [num, den] = partes[1].split("/").map(Number);
        fraccion = num / den;
    } else if (partes[0].includes("/")) {
        let [num, den] = partes[0].split("/").map(Number);
        fraccion = num / den;
    } else {
        entero = parseInt(partes[0], 10);
    }

    return entero + fraccion;
}

function toInches(decimal) {
    let entero = Math.floor(decimal);
    let fraccion = decimal - entero;
    
    if (fraccion === 0) return `${entero}`;
    
    // Convertir fracción decimal a fracción con denominador 16 (medidas en pulgadas)
    let denominador = 16;
    let numerador = Math.round(fraccion * denominador);

    // Simplificar la fracción
    let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let divisor = gcd(numerador, denominador);
    
    numerador /= divisor;
    denominador /= divisor;

    return numerador === denominador ? `${entero + 1}` : 
           (entero === 0 ? `${numerador}/${denominador}` : `${entero} ${numerador}/${denominador}`);
}

function tipoDesglose(tipo) {

    let rc = 0,
    lateral = 0,
    ruleta = [],
    jamba = 0,
    can = [],
    cal = 0;

    switch(tipo) {
        case "p65 2v": 
            rc = 1.375
            lateral = 0.125;
            ruleta = [1.125, 2];
            jamba = 2.125;
            can = [6.5, 2];
            cal = 5;  
        break;
        case "p65 3v": 
            rc = 1.375;
            lateral = 0.125;
            ruleta = [0.375, 3];
            jamba = 2.125;
            can = [7.375, 3];
            cal = 5;  
        break;
        case "trad. 2v": 
            rc = 0.125;
            lateral = 0.5;
            ruleta = [0.5, 2];
            jamba = 1;
            can = [4, 2];
            cal = 4;  
        break;
        case "trad. 3v": 
            rc = 0.125;
            lateral = 0.5;
            ruleta = [0, 3];
            jamba = 1;
            can = [6, 3];
            cal = 4;  
        break;
    }

    return {rc, lateral, ruleta, jamba, can, cal}
}


export default function calculateDesglose(ancho, alto, tipo) {
    if (ancho == "0" || alto == "0") {
        return
    }
    let anchoDecimal = toDecimal(ancho),
        altoDecimal = toDecimal(alto);

    const {rc, lateral, ruleta, jamba, can, cal} = tipoDesglose(tipo);
    
    //Resultados
    let rcResult = toInches(anchoDecimal - rc),
        lateralResult = toInches(altoDecimal - lateral),
        ruletaResult = toInches((anchoDecimal + (tipo === "p65 3v" ? ruleta[0]: -ruleta[0])) / ruleta[1]),
        jambaResult = toInches(altoDecimal - jamba),
        canResult = toInches((anchoDecimal - can[0]) / can[1]),
        calResult = toInches(altoDecimal - cal);

    let result = {
            rc: rcResult,
            lateral: lateralResult,
            ruleta: ruletaResult,
            jamba: jambaResult,
            can: canResult,
            cal: calResult
    }
    return result
}

export function calculateBarra(data) {
    let totals = {};

    Object.values(data).forEach(({ resultsCalculates }) => {
        for (let key in resultsCalculates) {
            let decimalValue = toDecimal(resultsCalculates[key]);
            totals[key] = (totals[key] || 0) + decimalValue;
        }
    });

    const barra = {
        riel: (totals.rc / 252).toFixed(3),
        cabezal: (totals.rc / 252).toFixed(3),
        ruleta: ((totals.ruleta * 4) / 252).toFixed(3),
        lateral: ((totals.lateral * 2) / 252).toFixed(3),
        jamba: ((totals.jamba * 2) / 252).toFixed(3),
        enganche: ((totals.jamba * 2) / 252).toFixed(3)
    }

    return {totals, barra};
}

