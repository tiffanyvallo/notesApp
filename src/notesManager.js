'use strict';
class Manager {
  constructor() {
    this.notesArray = []
  }

  create(newNote){
    this.notesArray.push(newNote)
  }
}
