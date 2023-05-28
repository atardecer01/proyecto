import express from "express"
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express(); 

app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = ['http://localhost:3000'];

const corsOptions = {
    origin: ['https://proyecto-seven-xi.vercel.app', 'https://proyecto-ij8terunr-atardecer01-s-team.vercel.app',dominiosPermitidos]
  };

app.use(cors())

app.use("/api", usuarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.get("/", (req,res) => {
    res.send("estas en el inicio")
});