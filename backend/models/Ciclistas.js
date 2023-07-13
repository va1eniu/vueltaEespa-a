import mongoose from "mongoose";

const ciclistaSchema = mongoose.Schema({
    
CiclistaID:{
    type : String,
    require : true,
    trim: true,
},

Nombre:{
    type : String,
    require : true,
    trim: true,
},

Equipo:{
    type : String,
    require : true,
    trim: true,
},

Edad:{
    type : String,
    require : true,
    trim: true,
},

Nacionalidad:{
    type : String,
    require : true,
    trim: true,
},
},
{
    timeStamps: true 
}
)

const Ciclista = mongoose.model("ciclistas" , ciclistaSchema);

export default Ciclista;