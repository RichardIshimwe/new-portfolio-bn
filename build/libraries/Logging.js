"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logging {
}
_a = Logging;
Logging.log = (param) => _a.info(param);
Logging.info = (param) => console.log(chalk_1.default.blue(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk_1.default.blueBright(param) : param);
Logging.warn = (param) => console.log(chalk_1.default.yellow(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk_1.default.yellowBright(param) : param);
Logging.error = (param) => console.log(chalk_1.default.red(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk_1.default.redBright(param) : param);
exports.default = Logging;
