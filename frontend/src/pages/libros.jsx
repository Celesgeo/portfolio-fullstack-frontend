    import { useEffect, useState } from "react";
    import { getLibros } from "../services/librosApi";

    export default function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        getLibros().then(setLibros);
    }, []);

    return (
        <section>
        <h2>📚 API Libros</h2>

        <p>
            API REST desarrollada con Node.js y Express para la gestión de libros.
        </p>

        <p><strong>Endpoints disponibles:</strong></p>
        <ul>
            <li>GET /libros</li>
            <li>GET /libros/:id</li>
            <li>POST /libros</li>
            <li>PUT /libros/:id</li>
            <li>DELETE /libros/:id</li>
        </ul>

        <hr />

        <ul>
            {libros.map((l) => (
            <li key={l.id}>
                <strong>{l.nombre}</strong><br />
                Autor: {l.autor}<br />
                Editorial: {l.editorial}
            </li>
            ))}
        </ul>
        </section>
    );
    }
