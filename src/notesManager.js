'use strict';
class Manager {
  constructor() {
    this.notesArray = []
  }
// notesManager.create(new Note("Hello"))
  create(newNote){
    this.notesArray.push(newNote)
  }
  findById(noteId){
    return this.notesArray.filter(note => note.idNum === noteId)[0]
    // this is needed so that we can search for the notes by the id in the array. also need this so that we can call and use in the interface
  }
}
