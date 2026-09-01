import ProductoCard from './components/ProductoCard';
import { productos as productosIniciales } from './data/productos';
import { useState } from "react";
import './App.css';
import FormularioProducto from './components/FormularioProducto';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [orden, setOrden] = useState("normal");
  const [productos, setProductos] = useState(productosIniciales);

  const disponibles = productos.filter(producto => producto.stock > 0);
  const noDisponibles = productos.filter(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const agregarProducto = (nuevoProducto) => {

    setProductos([
      ...productos,
      nuevoProducto
    ]);
  };

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (orden === "menorAMayor") return a.precio - b.precio;
    if (orden === "mayorAMenor") return b.precio - a.precio;
    return 0;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
    setOrden("normal");
  };

  const eliminarProductos = (id) => {

    const nuevaLista = productos.filter(
      producto => producto.id !== id
    );

    setProductos(nuevaLista);
    alert('Producto eliminado')
  };

  const modificarStock = (id, cambio) => {

    const nuevosProductos =
      productos.map(producto => {

        if (producto.id === id) {
          return {
            ...producto,
            stock: Math.max(
              0,
              producto.stock + cambio
            )
          };
        }
        return producto;
      });
    setProductos(nuevosProductos);
  };

  return (
    <main className="contenedor">
      <header className="banner-titulo">
        <h1 className="tiutle">Tienda tecnológica</h1>
        <div className="resumen-inventario">
          <p><strong>Disponibles:</strong> {disponibles.length}</p>
          <p><strong>Valor inventario:</strong> ${valorInventario.toLocaleString()}</p>

          <p><strong>Agotados:</strong> {noDisponibles.length}</p>
        </div>
      </header>

      <section className="panel-filtros">
        <div className="grupo-busqueda">
          <input
            type="text"
            className="input-busqueda"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />
        </div>

        <div className="grupo-controles">
          <select
            className="select-filtro"
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            <option value="Todas">Todas las categorías</option>
            <option value="Perifericos">Periféricos</option>
            <option value="Pantallas">Pantallas</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Audio">Audio</option>
            <option value="Mobiliario">Mobiliario</option>
            <option value="Almacenamiento">Almacenamiento</option>
          </select>

          <select
            className="select-filtro"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="normal">Sin ordenar</option>
            <option value="menorAMayor">Precio: Menor a Mayor</option>
            <option value="mayorAMenor">Precio: Mayor a Menor</option>
          </select>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(evento) => setSoloDisponibles(evento.target.checked)}
            />
            Mostrar únicamente disponibles
          </label>

          <button className="btn-limpiar" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>
      </section>

      <div className="info-resultados">
        <p>Productos encontrados: <strong>{productosOrdenados.length}</strong></p>
      </div>


      <section className="productos-grid">
        {productosOrdenados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onEliminar={eliminarProductos}
            modificarStock={modificarStock}
          />
        ))}
      </section>

      {productosOrdenados.length === 0 && (
        <div className="sin-resultados">
          <p>No se encontraron productos que coincidan con la búsqueda.</p>
        </div>
      )}

      <section className='FormAddProd'>
        <FormularioProducto
          onAgregar={agregarProducto} />
      </section>
    </main>
  );
}

export default App;