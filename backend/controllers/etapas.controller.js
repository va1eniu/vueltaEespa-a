import Etapa from "../models/Etapas.js";

const obetnerEtapa = async (req, res)=>{
    const etapa = await Etapa.find();
    res.json(etapa);
}

const agregarEtapa = async (req, res)=>{
    const etapa= await new Etapa(req.body);
    try {
        const nuevaEtapa = etapa.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
}

const borrarEtapa = async (req, res)=>{
    const etapa = await 
}

export{
    obetnerEtapa
}