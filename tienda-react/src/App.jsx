import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css'

function App() {
  return (
    <main>
      <h1>Tienda tecnológica</h1>
      {productos.map(producto => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}
    </main>
  );
}

export default App;
