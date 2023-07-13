import express from "express";
import dotenv from "dotenv";
import condectarDB from "./config/config.js"
import routes from "./routes/ciclista.routes.js";
import routeEtapa from "./routes/etapas.routes.js"
import routeEquipo from "./routes/equipos.routes.js"

const app = express();
app.use(express.json());

dotenv.config();

app.use("/ciclistas", routes);

app.use("/etapas", routeEtapa);

app.use("/equipos", routeEquipo);

const PORT = process.env.PORT

app.listen(PORT, () =>{
console.log(`listen on port ${PORT}`);
})

condectarDB();