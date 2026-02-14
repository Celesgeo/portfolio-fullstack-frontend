    import { useEffect, useState } from "react";
    import { getProductos } from "../services/productosApi";

    export default function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(setProductos);
    }, []);

    return (
        <section>
        <h2>📦 API Productos</h2>

        <p>
            API REST para gestión de productos desarrollada con
            Node.js y Express.
        </p>

        <ul>
            {productos.map((p) => (
            <li key={p.id}>
                <strong>{p.nombre}</strong><br />
                Precio: ${p.precio}<br />
                Categoría: {p.categoria}
            </li>
            ))}
        </ul>
        </section>
    );
    }
