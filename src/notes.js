'use-strict';

class Note {
  constructor(content = "DEFAULT CONTENT", idNum) {
    this.content = content
    this.title = content.slice(0,21) + '...'
    this.id = idNum
  }
}
