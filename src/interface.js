document.addEventListener("DOMContentLoaded", ()=> {
  var notesManager = new Manager();
  const updateList = () => {
    document.querySelector('#allNotes').innerHTML = '<ul>' + notesManager.notesArray.map(function (note) {
      return `<li> ${note.title} <button id="${note.idNum}" class="openNotesBtn" type="submit">open note</button> </li>`;
    }).join('') + '</ul>';
  }

  idNum = 0
  document.querySelector('#noteInput').addEventListener('submit',()=>{
    event.preventDefault();

    text = document.querySelector('#noteInputTextArea')
    // console.log(text.value)
    notesManager.create(new Note(`${text.value}`, `${idNum}`))
    idNum += 1
    console.log(notesManager)
    updateList()
  })
})
