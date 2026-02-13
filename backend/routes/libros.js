import express from "express";
import { body, param, validationResult } from "express-validator";
import { db } from "../config/db.js"; // Asegúrate de que la ruta a db.js sea correcta

const router = express.Router();

// Middleware de validación (este queda igual, es excelente práctica)
const validar = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }
    next();
};

// GET /libros -
router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM libros");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener libros", error });
    }
});

// POST /libros - 
router.post(
    "/",
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("autor").notEmpty().withMessage("El autor es obligatorio"),
    validar,
    async (req, res) => {
        const { nombre, autor } = req.body;
        try {
            const [result] = await db.query(
                "INSERT INTO libros (nombre, autor) VALUES (?, ?)",
                [nombre, autor]
            );
            res.status(201).json({ id: result.insertId, nombre, autor });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al crear libro", error });
        }
    }
);

// DELETE /libros/:id 
router.delete("/:id", param("id").isInt(), validar, async (req, res) => {
    try {
        const [result] = await db.query("DELETE FROM libros WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
        }
        res.status(200).json({ mensaje: "Libro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar", error });
    }
});

export default router;