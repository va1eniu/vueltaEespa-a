import Etapas from "../models/Etapas.js";

const obtenerCiclistas = async (req, res) => {
  const ciclista = await Etapas.find();
  res.json(ciclista);
};

const agregarCiclista = async (req, res) => {
  const ciclista = new Etapas(req.body);
  try {
    const nuevoCiclista = ciclista.save();
    res.json(nuevoCiclista);
  } catch (error) {
    console.log(error);
  }
};

const borrarCiclista = async (req, res) => {
  try {
    await Etapas.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "empleado no figura" });
  }
};

const actualizarCiclista = async (req, res) => {
  try {
    const ciclista = await Etapas.findOne({ _id: req.params.id });
    if (req.body.EtapaID) {
      ciclista.EtapaID = req.body.EtapaID;
    }
    if (req.body.EtapaNombre) {
      ciclista.EtapaNombre = req.body.EtapaNombre;
    }
    if (req.body.EtapaNombre) {
      ciclista.EtapaNombre = req.body.EquipoNombre;
    }
    if (req.body.Descripcion) {
      ciclista.Descripcion = req.body.Descripcion;
    }

    await ciclista.save();
    res.send(ciclista);
  } catch (error) {
    res.status(404);
    res.json({ error: "no se encontro ciclista" });
  }
};

const oneCiclista = async (req, res) => {
  const ciclista = await Etapas.find().limit(1);
  res.json(ciclista);
};

export {
  obtenerCiclistas,
  agregarCiclista,
  borrarCiclista,
  actualizarCiclista,
  oneCiclista,
};
