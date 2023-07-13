import Equipos from "../models/Equipos.js";

const obtenerEquipos = async (req, res)=>{
    const equipos = await Equipos.find()
    res.json(equipos);
}

export {
    obtenerEquipos
}