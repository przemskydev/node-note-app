const chalk = require('chalk');
const { strict, string } = require('yargs');
const yargs = require('yargs');
const { getNotes, addNotes, removeNote, listNotes, readNote } = require('./notes')

// const command = process.argv[2]

// if (command === 'add') {
//   console.log(chalk.green.inverse("Adding notes!"))
// } else if (command === 'remove') {
//   console.log(chalk.red.inverse("Removing notes!"))
// }

// console.log(process.argv)
// console.log(yargs.argv)

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNotes(argv.title, argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List of notes',
  handler() {
    listNotes()
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    readNote(argv.title)
  }
})

// console.log(yargs.argv)
yargs.parse()