const chalk = require('chalk');
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add') {
  console.log(chalk.green.inverse("Adding notes!"))
} else if (command === 'remove') {
  console.log(chalk.red.inverse("Removing notes!"))
}

console.log(process.argv)