function ProductoCard({ producto, onEliminar, modificarStock }) {
    const {
        nombre, precio, categoria, stock
    } = producto;
    const estado = stock > 0 ? "Disponible" : "Agotado";
    const mostrarProducto = () => {
        alert(`Seleccionaste ${nombre}`);
    };
    const formatearPrecio = precio => {
        return precio.toLocaleString("es-CO");
    };

    return (
        <article className="producto-card">
            <h2>{nombre}</h2>
            <p>Categoría: {categoria}</p>
            
            <p>
                Precio:
                ${formatearPrecio(precio)}
            </p>
            <div>
                <button onClick={() => modificarStock(producto.id, -1)}>-</button>
                <p>Stock: {stock}</p>
                <button onClick={() => modificarStock(producto.id, 1)}>+</button>
            </div>
            <strong>{estado}</strong>
            <br />
            <button
                className="btn-producto"
                onClick={mostrarProducto}
                disabled={stock === 0}
            >
                {
                    stock > 0
                        ? "Ver producto"
                        : "Agotado"
                }
            </button>
            <button
                onClick={() => onEliminar(producto.id)}
            >Eliminar</button>
        </article>
    );



/*Usamos filter() porque éste crea un arreglo más en el que se mostrarán 
todos los productos EXCEPTO el que fue eliminado, en cambio usando find()
no se creará ningún arreglo y solo se mostrará un objeto que cumpla con 
una unica condición */
}
export default ProductoCard;