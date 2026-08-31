import { useState } from "react";

function FormularioProducto({ onAgregar }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        precio: "",
        categoria: "",
        stock: ""
    });

    const manejarCambio = (evento) => {
        setFormulario({
            ...formulario,
            [evento.target.name]: evento.target.value
        });
    };

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        if (
            formulario.nombre.trim() === "" ||
            formulario.categoria.trim() === "" ||
            Number(formulario.precio) <= 0 ||
            Number(formulario.stock) < 0
        ) {
            alert("Revisa los datos del producto");
            return;
        }

        const nuevoProducto = {
            id: Date.now(),
            nombre: formulario.nombre,
            precio: Number(formulario.precio),
            categoria: formulario.categoria,
            stock: Number(formulario.stock)
        };

        onAgregar(nuevoProducto);
    };


    return (
        <form onSubmit={manejarEnvio}>

            <h2>Agregar producto</h2>

            <div className="campo-formulario">
                <label>Nombre del producto</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ej: Mouse inalámbrico"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                />
            </div>

            <div className="campo-formulario">
                <label>Categoría</label>
                <input
                    type="text"
                    name="categoria"
                    placeholder="Ej: Perifericos"
                    value={formulario.categoria}
                    onChange={manejarCambio}
                />
            </div>

            <div className="campo-formulario">
                <label>Precio</label>
                <input
                    type="number"
                    name="precio"
                    placeholder="Ej: 50000"
                    value={formulario.precio}
                    onChange={manejarCambio}
                />
            </div>

            <div className="campo-formulario">
                <label>Stock</label>
                <input
                    type="number"
                    name="stock"
                    placeholder="Ej: 10"
                    value={formulario.stock}
                    onChange={manejarCambio}
                />
            </div>

            <button
                type="submit"
                className="btn-agregar"
            >
                Agregar producto
            </button>

        </form>
    );
}

export default FormularioProducto;