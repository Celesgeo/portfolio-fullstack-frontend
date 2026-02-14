    const API_URL = "http://localhost:3000";

    export const getLibros = async () => {
    const res = await fetch(`${API_URL}/libros`);
    return res.json();
    };