import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import Logging from "./libraries/Logging";
import router from "./routes/user";

const app = express();

app.use(express.json()); // Add this line before defining routes

mongoose
.connect(config.mongo.url)
.then(() => {
    Logging.log('connected to the database');
})
.catch((error) => {
    Logging.error("unable to connect to database");
    console.log(error);
})

app.use("/api/v1/", router);

app.get('/', (req, res) => {
    res.status(200).json({ message: "welcome to the backend of my new portfolio"});
})

app.get('*', (req, res) => {
    Logging.error("page not found");
    res.status(200).json({ message: "page not found"});
})

app.listen(config.server.port, () =>{
    Logging.log(`Server is running on http://localhost:${config.server.port}`)
})