const fs = require('fs')

const getNotes = () => "Your notes..."

const addNotes = (title, body) => {
  const notes = loadNotes()

  notes.push({
    title: title,
    body: body
  })

  saveNotes(notes)
}

const saveNotes = (notes) => {
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

module.exports = {
  getNotes,
  addNotes
}