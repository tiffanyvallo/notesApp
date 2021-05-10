class NotesManager {
  constructor(){
    this.notesArray = []
  }

  create(newNote){
    this.notesArray.push(newNote)
  }
}

class Note {
  constructor(content) {
    this.content = content
    this.title = content.slice(0,21)
  }
}

let nm = new NotesManager

nm.create(new Note('this is a pretty note I just made'))
nm.create(new Note('this is ANOTHER pretty note I just made'))


console.log(nm.notesArray)
