import { useState } from "react";

function FormularioProducto() {
    const { formulario, setFormulraio } = useState({
        nombre: "",
        precio: "",
        categoria: "",
        stock: ""
    });

    return (
        <form>
            <h2>Agregar producto</h2>

            <input type="text" name="nombre" placeholder='Nombre' />
            <input type="text" name='categoria' placeholder='Categoría' />
            <input type="number" name='precio' placeholder='Precio' />
            <input type="number" name='stock' placeholder='Stock' />
            <button type='submit'>Agregar producto</button>
        </form>
    );
}

export default FormularioProducto;