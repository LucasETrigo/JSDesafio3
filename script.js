class Modelo {
    constructor(tipo, lanzamiento, precios){
        this.tipo = tipo;
        this.lanzamiento = lanzamiento;
        this.precios = precios;
    }
}

const modeloUno = new Modelo("13 Pro Max", 2021, 200000);
const modeloDos = new Modelo("12 Pro Max", 2020, 150000);

let modelos = [modeloUno, modeloDos];


let elegir = parseInt(prompt("Que modelo queres comprar? (1 para elegir 13 pro Max, 2 para elegir 12 pro max)"));

if(elegir === 1) {
    console.log(modelos[0]);
} else if(elegir === 2) {
    console.log(modelos[1]);
}



const unaCuota = (num1) => num1;
const tresCuotas = (num1, num2) => (num1 * 1.15) / num2;
const seisCuotas = (num1, num2) => (num1 * 1.3) / num2;
const nueveCuotas = (num1, num2) => (num1 * 1.4) / num2;
const doceCuotas = (num1, num2) => (num1 * 1.5) / num2;


function cuotasPagar(precios, cuota) {
    if(cuota == 1) {
        console.log(unaCuota(precios, cuota));
    } else if(cuota == 3) {
        console.log(tresCuotas(precios, cuota));
    } else if(cuota == 6) {
        console.log(seisCuotas(precios, cuota));
    } else if(cuota == 9) {
        console.log(nueveCuotas(precios, cuota));
    } else if(cuota == 12) {
        console.log(doceCuotas(precios, cuota));
    } else {
        console.log("Ingrese una cuota valida para saber el precio a pagar.");
    }
}

let precios = parseFloat(prompt("Cual es el valor del producto que selecciono (Fijarse en console para ver el precio)?"));
let cuota = parseInt(prompt("En cuantas cuotas quiere pagarlo? (1, 3, 6, 9 o 12)"));

cuotasPagar(precios, cuota);
