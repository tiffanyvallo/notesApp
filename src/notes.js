'use-strict';

class Note {
  constructor(content = "DEFAULT CONTENT", id) {
    this.content = content
    this.title = content.slice(0,21) + '...'
    this.idNum = id
  }
}
