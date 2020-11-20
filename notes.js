const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => "Your notes..."

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
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
  const newList = notes.filter(note=>note.title !== title) 
  
  if (newList.length < notes.length) {
    saveNotes(newList)
    console.log(chalk.yellow.inverse("Note removed!"))
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

module.exports = {
  getNotes,
  addNotes,
  removeNote
}