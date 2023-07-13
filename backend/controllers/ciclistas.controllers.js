import Ciclista from "../models/Ciclistas.js";

const obtenerCiclistas = async (req, res) => {
  const ciclista = await Ciclista.find();
  res.json(ciclista);
};

const agregarCiclista = async (req, res) => {
  const ciclista = new Ciclista(req.body);
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
    const ciclista = await Ciclista.findOne({ _id: req.params.id });
    if (req.body.CiclistaID) {
      ciclista.CiclistaID = req.body.CiclistaID;
    }
    if (req.body.Nombre) {
      ciclista.Nombre = req.body.Nombre;
    }
    if (req.body.Equipo) {
      ciclista.Equipo = req.body.Equipo;
    }
    if (req.body.Edad) {
      ciclista.Edad = req.body.Edad;
    }
    if (req.body.Nacionalidad) {
      ciclista.Nacionalidad = req.body.Nacionalidad;
    }

    await ciclista.save()
    res.send(ciclista)
  } catch (error) {
    res.status(404);
    res.json({ error: "no se encontro ciclista" });
  }
};

const oneCiclista = async (req, res) => {
  const ciclista = await Ciclista.find().limit(1);
  res.json(ciclista);
};

export {
  obtenerCiclistas,
  agregarCiclista,
  borrarCiclista,
  actualizarCiclista,
  oneCiclista,
};
