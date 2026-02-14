import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const API_URL = "https://portfolio-fullstack-frontend-znrt.onrender.com"
    fetch(`${API_URL}/productos`)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => {
        console.error("Error en productos:", err);
        setProductos([{ id: 1, descripcion: "Producto de prueba (Offline)" }]);
      });

    fetch(`${API_URL}/libros`)
      .then((res) => res.json())
      .then((data) => setLibros(data))
      .catch((err) => {
        console.error("Error en productos:", err)
        setLibros([{ id: 1, nombre: "Libro de prueba", autor: "Autor Offline", editorial: "N/A" }]);
      });
  }, []);

  return (
    <div className="portfolio-app">
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-circle">O</span>
          <span className="logo-name">Celeste</span>
        </div>
        <a href="mailto:celesteorellano14@gmail.com">
        <button className="btn-contact-nav">Contacto</button>
        </a>
      </nav>

      <header className="hero">
        <span className="badge">✨ PORTFOLIO WEB</span>
        <h1>Hola, Soy <strong>Orellano Georgina Celeste</strong></h1>
        <h3>Desarrolladora Web Full Stack</h3>
        <div className="hero-actions">
          <a href="#proyectos">
          <button className="btn-primary">Ver Proyectos</button>
          </a>
              <a href="https://wa.me/5493804910523" target="_blank">
            <button className="btn-secondary">¡Hablemos!</button>
          </a>
        </div>
      </header>

      <main className="projects-container" id="proyectos">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {/* Mapeo de Libros */}
          {libros.map((libro) => (
            <div className="project-card" key={libro.id}>
              <div className="project-icon">📚</div>
              <h4>{libro.nombre}</h4>
              <p>{libro.autor}</p>
            </div>
          ))}
          {/* Mapeo de Productos */}
          {productos.map((prod) => (
            <div className="project-card" key={prod.id}>
              <div className="project-icon">📦</div>
              <h4>{prod.titulo}</h4>
              <p>{prod.descripcion}</p>
              <small><strong>Tecnologias:</strong> {prod.tecnologias}</small>
              {prod.link_repo && (
                <a href={prod.link_repo} target="_blank" rel="noreferrer" className="link-github"> Ver Código</a>
                )}
            </div>

          ))}
        </div>
      </main>
    </div>
  );
}

export default App;