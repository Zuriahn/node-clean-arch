import express from "express";
import cors from "cors";
import morgan from "morgan";

import { addPresentation } from "./controllers/index";


const builderApp = express();

builderApp.use(express.json({ limit: 1024 * 32 }));

builderApp.use(cors());

builderApp.use(morgan("dev"))

builderApp.get("/", (req,res,next) => { res.status(200).json({message: "Server only"})})

addPresentation(builderApp);

export default builderApp;
