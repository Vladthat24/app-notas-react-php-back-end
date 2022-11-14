import express from "express";
import tasksRoutes from "./routes/tasks";
import cors from 'cors';
import morgan from 'morgan';//visualizar en consola las peticiones

//libreria para documentar codigo
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import {options} from "./swaggerOptions";

const specs=swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(morgan("dev"));

//para que reciba datos en valor json
app.use(express.json());

app.use(tasksRoutes);

app.use('/docs',swaggerUI.serve,swaggerUI.setup(specs));

export default app;
