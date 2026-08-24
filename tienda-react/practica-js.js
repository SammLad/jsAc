// console.log("JavaScript listo para practicar");

// function calcularTotal(precio, cantidad) {
//     const total = precio * cantidad;
//     return total;
// }
// const resultado = calcularTotal(50000, 3);
// console.log(resultado);



//ACT 1
function sumar(a, b) {
    let re = a + b;
    return re;
}

function restar(a, b) {
    let re = a - b;
    return re;
}

function multiplicar(a, b) {
    let re = a * b;
    return re;
}

function dividir(a, b) {
    let re = a / b;
    return re;
}

function calcularPromedio(nota1, nota2, nota3) {
    let re = (nota1, nota2, nota3) / 3
    return re;
}
const re1 = sumar(3, 7);
const re2 = restar(9, 2);
const re3 = multiplicar(5, 20);
const re4 = dividir(10, 5);
const prom = calcularPromedio(70, 80, 65);


console.log("Suma:", re1, "Resta:", re2, "Multiplicación:", re3, "División:", re4);
console.log("Promedio", prom);

//console.log es para que los que esté dentro del parentesis y comillas salga en la terminal al ejecutar
//return es para que el valor al retornada en la función se le pueda atribuir a una variable


// function aplicarIva(precio) {
//     return precio * 1.19;
// }

// const aplicarIva = (precio) => {
//     return precio * 1.19;
// };



//ACT 2
const aplicarIva = precio => precio * 1.19;

function esMayorEdad(edad) { return edad >= 18; }
console.log(aplicarIva(30000))
console.log(esMayorEdad(17))



