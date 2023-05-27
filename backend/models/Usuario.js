import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const usuarioSchema = mongoose.Schema({
    nombre:  String,
       
    password: String,
        
    email:  String,
        
});


const Usuario = mongoose.model("Usuarios", usuarioSchema);
export default Usuario;