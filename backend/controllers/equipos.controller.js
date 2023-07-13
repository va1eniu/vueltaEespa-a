import Equipos from "../models/Equipos.js";

const obtenerCiclistas = async (req, res) => {
  const ciclista = await Equipos.find();
  res.json(ciclista);
};

const agregarCiclista = async (req, res) => {
  const ciclista = new Equipos(req.body);
  try {
    const nuevoCiclista = ciclista.save();
    res.json(nuevoCiclista);
  } catch (error) {
    console.log(error);
  }
};

const borrarCiclista = async (req, res) => {
  try {
    await Ciclista.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "empleado no figura" });
  }
};

const actualizarCiclista = async (req, res) => {
  try {
    const ciclista = await Equipos.findOne({ _id: req.params.id });
    if (req.body.EquipoID) {
      ciclista.EquipoID = req.body.EquipoID;
    }
    if (req.body.EquipoNombre) {
      ciclista.EquipoNombre = req.body.EquipoNombre;
    }
    if (req.body.EquipoNombre) {
      ciclista.EquipoNombre = req.body.EquipoNombre;
    }
    if (req.body.Patrocinador) {
      ciclista.Patrocinador = req.body.Patrocinador;
    }

    await ciclista.save();
    res.send(ciclista);
  } catch (error) {
    res.status(404);
    res.json({ error: "no se encontro ciclista" });
  }
};

const oneCiclista = async (req, res) => {
  const ciclista = await Equipos.find().limit(1);
  res.json(ciclista);
};

export {
  obtenerCiclistas,
  agregarCiclista,
  borrarCiclista,
  actualizarCiclista,
  oneCiclista,
};
