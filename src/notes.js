'use-strict';

class Note {
  constructor(content) {
    this.content = content
    this.title = content.slice(0,21) + '...'
  }
}