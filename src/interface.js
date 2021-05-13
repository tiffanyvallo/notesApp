document.addEventListener("DOMContentLoaded", () => {
  var notesManager = new Manager();
  const updateList = () => {
    document.querySelector('#allNotes').innerHTML = '<ul>' + notesManager.notesArray.map(function (note) {
      return `<li> ${note.title} <button id="${note.idNum}" class="openNotesBtn" type="submit">open note</button> </li>`;
    }).join('') + '</ul>';
  }

  idIter = 0
  document.querySelector('#noteInput').addEventListener('submit',() => {
    event.preventDefault();

    text = document.querySelector('#noteInputTextArea')
    // console.log(text.value)
    notesManager.create(new Note(`${text.value}`, `${idIter}`))
    idIter += 1
    console.log(notesManager)
    updateList()

    var openNotesButtons = document.querySelectorAll('.openNotesBtn')
    openNotesButtons.forEach(function(button) {
      button.addEventListener('click', () => {
      // console.log(button)
      // console.log(button.id)
      noteToOpen = notesManager.notesArray[button.id]
      text.value = noteToOpen.content
      })
    })
    // console.log(openNotesButtons)
  })


  function fetchEmoji(emoji){
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ text:emoji})
      })
      .then(results => {return results.json();
      })
      .then(console.log)
      // .then(return)
  }
  fetchEmoji(':banana:')


  //
  // function getEmoji() {
  //   // const data = {text: ':apple:' };
  //   return fetch('https://makers-emojify.herokuapp.com/', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({text: ':apple:' })
  //     })
  //     .then(results => {results.json() })
  //     .then(console.log)
  //     // .then(results => {return results.json(emojified_text)
  //   }
  //
  // getEmoji()

})
