import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import { useState } from "react";
import './App.css';
function App() {
  const [busqueda, setBusqueda] = useState("");
  const disponibles = productos.filter(producto => producto.stock > 0);
  const noDisponibles = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
  const estado = noDisponibles ? 'Si hay' : 'No hay';
  const productosFiltrados =
    productos.filter(producto =>
      producto.nombre
        .toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    );
  const prodFiltrado =
    disponibles.filter(producto =>
      producto.nombre
        .toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    );
  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>Productos no disponibles: {estado}</p>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />
      <div className="secciones">
        <section className="productos">
          <h2>Todos los Productos</h2>
          {productosFiltrados.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
          {
            productosFiltrados.length === 0
              ? <p>No se encontraron productos.</p>
              : null
          }
        </section>
        <section className="productos">
          <h2>Productos disponibles</h2>
          {prodFiltrado.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
          {
            prodFiltrado.length === 0
              ? <p>No se encontraron productos.</p>
              : null
          }


        </section>
      </div>
    </main>
  );
}
export default App;