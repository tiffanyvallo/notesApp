document.addEventListener("DOMContentLoaded", () => {
  var notesManager = new Manager();
  const updateList = () => {
    document.querySelector('#allNotes').innerHTML = '<ul>' + notesManager.notesArray.map(function (note) {
      return `<li> <a href= "#${note.idNum}">${note.title}</a> </li>` //` <button id="${note.idNum} class="openNotesBtn" type="submit">open note</button> </li>`;
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

  function showNoteForCurrentPage() {
    console.log(window.location)
    showNote(getNoteFromURL(window.location));
  }
  
  function showNote(id) {
    var note = notesManager.findById(id).content
    document
    .getElementById("allNotes")
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