const {log, error} = require("console");
const chalk = require("chalk");
const _ = require("lodash");
// import chalk from  'chalk';


log(chalk.blue("hello World !!!"));
log(chalk.green("Got Success !!!"));
error(chalk.yellow("Warning Arrise !!!"));

log(`
    CPU: ${chalk.red('90%')} and ${chalk.bgBlue(chalk.red('90%'))}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);

const error1 = chalk.bold.red;
const warning1 = chalk.hex('#FFA500'); // Orange color

console.log(error1('Error!'));
console.log(warning1('Warning!'));

const error2 = chalk.bold.bgRed;
const warning2 = chalk.bgHex('#FFA500'); // Orange color

console.log(error2('Error!'));
console.log(warning2('Warning!'));


const elementArray = [2,4,6];
const doubleArray = _.map(elementArray, (number) => number * 2);
log(chalk.red(doubleArray));

const evenNumber = _.filter(elementArray, (number) => number%3 != 0)
log(chalk.yellow(evenNumber));

const oddNumber = _.filter(elementArray, (number) => number%2 === 0)
log(chalk.green(oddNumber));