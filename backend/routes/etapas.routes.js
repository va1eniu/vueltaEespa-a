import express from "express";

const routes = express.Router();

import{obtenerCiclistas, agregarCiclista, borrarCiclista, actualizarCiclista, oneCiclista} from "../controllers/etapas.controller.js";

routes.get("/all", obtenerCiclistas);

routes.post("/add", agregarCiclista);

routes.delete("/del/:id", borrarCiclista);

routes.patch("/upd/:id", actualizarCiclista);

routes.get("/one", oneCiclista);

export default routes;