import mongoose from "mongoose";
import express from "express";

const etapaSchema = mongoose.Schema({
    
EtapaID:{
    type: String,
    required : true,
    trim: true
},
    
EtapaNombre:{
    type: String,
    required : true,
    trim: true
},
    

Descripcion:{
    type: String,
    required : true,
    trim: true
},

},
{
    timeStamp: true
})

const Etapa = mongoose.model("etapas", etapaSchema);

export default Etapa;