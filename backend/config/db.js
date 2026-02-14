// backend/config/db.js
import mysql from "mysql2/promise";

export let db;

export const connectDB = async () => {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      ssl: { rejectUnauthorized: false } 
    });
    console.log("✅ Conexión exitosa a Aiven");
  } catch (error) {
    console.error("❌ Error de conexión:", error);
  }
};