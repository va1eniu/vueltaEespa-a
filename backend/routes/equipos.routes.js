import  express  from "express";
import { obtenerEquipos } from "../controllers/equipos.controller.js";

const router = express.Router();

router.get("/all", obtenerEquipos);

export default router;