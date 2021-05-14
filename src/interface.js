document.addEventListener("DOMContentLoaded", () => {
  var notesManager = new Manager();
  const updateList = () => {
    document.querySelector('#allNotes').innerHTML = '<ul>' + notesManager.notesArray.map(function (note) {
      return `<li> <a href= "#${note.idNum}">${note.title}</a> </li>`
      // changed the href to the id so that it picks the id of the individual notes, makes it easier to find when we search for urls with hashes
    }).join('') + '</ul>';
  }

  idIter = 0
  document.querySelector('#noteInput').addEventListener('submit',() => {
    event.preventDefault();

    text = document.querySelector('#noteInputTextArea')
    // console.log(text.value)
    createEmoji(`${text.value}`).then((emojiText) => {
    notesManager.create(new Note(`${emojiText}`, `${idIter}`))
    idIter += 1
    console.log(notesManager)
    updateList()
    })
    updateList()
    console.log(notesManager.notesArray)
  })

 
  window.addEventListener("hashchange", showNoteForCurrentPage);
  //had to move this to inside the dom content loader, so that it can be always listening out for a hash change

  function showNoteForCurrentPage() {
    console.log(window.location)
    showNote(getNoteFromURL(window.location));
  }
  
  function showNote(id) {
    var note = notesManager.findById(id).content
    // created a variable which goes into notesManager, and used the find by ID function to find the note's id and then return it
    // chnaged the search to an id so that it is easier to find when searching through the array
    document
    .getElementById("allNotes")
    // this was correct just needed to remove the # as this was not needed, as the document knows its already in the index.html
    .innerHTML = note
  }
  
  
  function getNoteFromURL(location) {
    console.log(location.hash.split('#'))
    return location.hash.split("#")[1];
  }

})


async function createEmoji(string) {
  const fetchEmoji = await fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({'text': string})
    });
    let detectEmoji = await fetchEmoji.json();
    let response = await detectEmoji
    return response.emojified_text
}