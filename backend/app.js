import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import productosRouter from "./routes/productos.js"
import librosRouter from "./routes/libros.js"
import "dotenv/config"

const app = express()
connectDB();
app.use(cors())
app.use(express.json())

app.use("/productos", productosRouter)
app.use("/libros", librosRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto: ${PORT}`)
})