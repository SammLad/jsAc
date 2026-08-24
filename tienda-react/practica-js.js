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

// //console.log es para que los que esté dentro del parentesis y comillas salga en la terminal al ejecutar
// //return es para que el valor al retornada en la función se le pueda atribuir a una variable



//ACT 2
const aplicarIva = precio => precio * 1.19;

function esMayorEdad(edad) { return edad >= 18; }
console.log(aplicarIva(30000))
console.log(esMayorEdad(17))

const cuadrado = numero => numero * numero;
const esMayorEdad = edad => {
    if (edad > 18) {
        return "Es mayor de edad"
    } else {
        return "Es menor de edad"
    }
};
const nombreCompleto = (nombre, apellido) => nombre + " " + apellido;

console.log(cuadrado(12));
console.log(esMayorEdad(17));
console.log(nombreCompleto("Laura", "Ladino"));





// ACT 3
const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
    { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
    { id: 4, nombre: 'Cable USB', precio: 20000, categoria: 'Accesorios', stock: 5 },
    { id: 5, nombre: 'Cargador celular', precio: 80000, categoria: 'Accesorios', stock: 0 },
    { id: 6, nombre: 'Estuche portatil', precio: 100000, categoria: 'Accesorios', stock: 3 },
    { id: 7, nombre: 'Funda celular', precio: 25000, categoria: 'Accesorios', stock: 5 },
    { id: 8, nombre: 'Audifonos', precio: 150000, categoria: 'Audio', stock: 0 },
    { id: 9, nombre: 'Baterias', precio: 30000, categoria: 'Accesorios', stock: 3 },
    { id: 10, nombre: 'Vidrio templado', precio: 10000, categoria: 'Accesorios', stock: 5 },
];




//ACT 4

productos.forEach((producto, indice) => {
    console.log(`${indice + 1}. ${producto.nombre} - ${producto.precio} - ${producto.stock}`);
});




//ACT 5
const nombres = productos.map(producto => producto.nombre);
const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(producto => producto.nombre + " cuesta " + producto.precio);
console.log(nombres);
console.log(preciosConIva);
console.log(nombresMayuscula);
console.log(resumenProductos);



//ACT 6
const precioMayor = productos.filter(producto => producto.precio > 100000);
const precioEntre = productos.filter(
    producto => producto.precio >= 50000 & producto.precio <= 200000
);
const categEscogida = productos.filter(producto => producto.categoria === 'Accesorios');
const id5 = productos.find(producto => producto.id === 5);
const buscarProducto = (id) => {
    return productos.find(producto => producto.id === id);
};

console.log(precioMayor);
console.log(precioEntre);
console.log(categEscogida);
console.log(id5);
console.log(buscarProducto(4));



//ACT 7
const hayAgotados = productos.some(p => p.stock === 0);

const preciosValidos = productos.every(p => p.precio > 0);

const preciosM = productos.every(p => p.precio > 1000000);

const stockM = productos.some(p => p.stock >= 0);

const valorInventario = productos.reduce(
    (total, p) => total + p.precio * p.stock,
    0
);


console.log("¿Algún producto agotado?:", hayAgotados);
console.log("¿Algún precio mayor a $1.000.000?:", preciosM)
console.log("¿Todos los precios mayor a $0?:", preciosValidos);
console.log("¿Stock igual o mayor a cero?:", stockM);
console.log("Valor total inventario:", valorInventario)



//ACT 8
const productoActualizado = {
    ...productos[5],
    precio: 80000,
    stock: 7
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';

console.log(`El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y su estado es: ${productoActualizado.stock > 0 ? 'Disponible' : 'Agotado'}`);