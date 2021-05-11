'use strict';
class Manager {
  constructor() {
    this.notesArray = []
  }
// notesManager.create(new Note("Hello"))
  create(newNote){
    this.notesArray.push(newNote)
  }
}
