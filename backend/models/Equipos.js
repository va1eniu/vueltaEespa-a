import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
    EquipoID:{
        type: String,
        required : true,
        trim:true
    },
    
EquipoNombre:{
        type: String,
        required : true,
        trim:true
    },
    
Ciclistas:{
        type: String,
        required : true,
        trim:true
    },
    
Patrocinador:{
        type: String,
        required : true,
        trim:true
    },

},{
    timesStamp: true
})

const Equipos = mongoose.model("equipos", equiposSchema);

export default Equipos;