import Router from "express";
import { obetnerEtapa } from "../controllers/etapas.controller.js";

const routes = Router();

routes.get("/all", obetnerEtapa);

export default routes;