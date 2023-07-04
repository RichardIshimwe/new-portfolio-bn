import chalk from "chalk";

export default class Logging {
    public static log = (param: any) => this.info(param);
    public static info = (param: any) => 
    console.log(chalk.blue(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk.blueBright(param): param);
    public static warn = (param: any) => 
    console.log(chalk.yellow(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk.yellowBright(param): param);
    public static error = (param: any) => 
    console.log(chalk.red(`[${new Date().toLocaleString()}][INFO]`), typeof param === "string" ? chalk.redBright(param): param);
}