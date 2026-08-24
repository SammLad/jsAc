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



// ACT 3
const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, stock: 3 },
    { id: 4, nombre: 'Cable USB', precio: 20000, stock: 5 },
    { id: 5, nombre: 'Cargador celular', precio: 80000, stock: 0 },
    { id: 6, nombre: 'Estuche portatil', precio: 100000, stock: 3 },
    { id: 7, nombre: 'Funda celular', precio: 25000, stock: 5 },
    { id: 8, nombre: 'Audifonos', precio: 150000, stock: 0 },
    { id: 9, nombre: 'Baterias', precio: 30000, stock: 3 },
    { id: 10, nombre: 'Vidrio templado', precio: 10000, stock: 5 },
];




//ACT 4
productos.forEach(producto => {
    console.log(producto.nombre);
});

const nombres = productos.map(producto => {
    return producto.nombre;
});


//ACT 5
const disponibles = productos.filter(
    producto => producto.precio >= 50000 & producto.precio <= 200000
);

const encontrado = productos.find(
    producto => producto.id === 5
);

console.log(disponibles);
console.log(encontrado);