const fs = require('fs')
const chalk = require('chalk');
const { title } = require('process');

const getNotes = () => "Your notes..."

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)

    console.log(chalk.green.inverse("New note added!"))
  } else {
    console.log(chalk.red.inverse("Note title taken!"))
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

const removeNote = title => {
  const notes = loadNotes()
  const newList = notes.filter(note => note.title !== title)

  if (newList.length < notes.length) {
    saveNotes(newList)
    console.log(chalk.yellow.inverse("Note removed!"))
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.magenta.inverse.bold("Your notes"))
  notes.forEach(note => console.log(note.title))
}

const readNote = title => {
  const note = loadNotes().find(note => note.title === title)

  if (!note) {
    console.log(chalk.red.bold("No note found...!"))
  } else {
    console.log(chalk.blue.bold(note.title))
    console.log(chalk.blue(note.body))
  }
}

module.exports = {
  getNotes,
  addNotes,
  removeNote,
  listNotes,
  readNote
}