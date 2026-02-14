    const API_URL = "http://localhost:3000";

    export const getProductos = async () => {
    const res = await fetch(`${API_URL}/productos`);
    if (!res.ok) {
        throw new Error("Error al obtener productos");
    }
    return res.json();
    };
