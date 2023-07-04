"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./libraries/Logging"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    Logging_1.default.log('connected to the database');
})
    .catch((error) => {
    Logging_1.default.error("unable to connect to database");
    console.log(error);
});
app.use("/api/v1/", user_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ message: "welcome to the backend of my new portfolio" });
});
app.get('*', (req, res) => {
    Logging_1.default.error("page not found");
    res.status(200).json({ message: "page not found" });
});
app.listen(config_1.config.server.port, () => {
    Logging_1.default.log(`Server is running on http://localhost:${config_1.config.server.port}`);
});
