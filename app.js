const chalk = require('chalk');
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

const colorMsg = chalk.green.inverse.bold("Success")

console.log(colorMsg)