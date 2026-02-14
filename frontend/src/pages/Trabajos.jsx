    import { Link } from "react-router-dom";

    export default function Trabajos() {
    return (
        <section>
        <h2>Mis trabajos</h2>

        <p>APIs desarrolladas en Node.js + Express con frontend en React.</p>

        <ul>
            <li>
            <Link to="/trabajos/productos">📦 API Productos</Link>
            </li>
            <li>
            <Link to="/trabajos/libros">📚 API Libros</Link>
            </li>
        </ul>
        </section>
    );
    }