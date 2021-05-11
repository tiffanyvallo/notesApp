'use-strict';

class Note {
  constructor(content = "DEFAULT CONTENT") {
    this.content = content
    this.title = content.slice(0,21) + '...'
  }
}
