import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const noDisponibles = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
  const estado = noDisponibles ? 'Si hay' : 'No hay';
  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>Productos no disponibles: {estado}</p>
      <div className="secciones">
        <section className="productos">
          <h2>Todos los Productos disponibles</h2>
          {productos.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />

          ))}
        </section>
        <section className="productos">
          <h2>Productos disponibles</h2>
          {
            disponibles.map(producto => (
              <ProductoCard
                key={producto.id}
                producto={producto}
              />
            ))
          }


        </section>
      </div>
    </main>
  );
}
export default App;