import chalk from 'chalk';
import { gulpConfig } from "./../gulp.config.js";



let build = Object.assign(gulpConfig, {});
console.log(chalk.yellowBright('Using gulp config file: "../../gulp.config.js"'));

// Exports
export { build };
