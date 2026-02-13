import express from "express";
import { body, validationResult } from "express-validator";
import { db } from "../config/db.js";

const router = express.Router();

// Middleware de validación
const validar = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }
    next();
};

// GET /productos - Obtiene todos los proyectos de la DB
router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM productos");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener los productos" });
    }
});

// POST /productos
router.post(
    "/",
    body("titulo").notEmpty().withMessage("El título es obligatorio"),
    body("descripcion").isLength({ min: 10 }).withMessage("La descripción debe ser más larga"),
    validar,
    async (req, res) => {
        const { titulo, descripcion, tecnologias, link_repo } = req.body;
        try {
            const [result] = await db.query(
                "INSERT INTO productos (titulo, descripcion, tecnologias, link_repo) VALUES (?, ?, ?, ?)",
                [titulo, descripcion, tecnologias, link_repo]
            );
            res.status(201).json({ id: result.insertId, mensaje: "Proyecto guardado con éxito" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al guardar el proyecto" });
        }
    }
);

export default router;