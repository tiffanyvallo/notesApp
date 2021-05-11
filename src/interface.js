document.addEventListener("DOMContentLoaded", ()=> {
  var notesManager = new Manager();
  const updateList = () => {
    document.querySelector('#allNotes').innerHTML = '<ul>' + notesManager.notesArray.map(function (note) {
      return `<li> + ${note.title} + </li>`;
    }).join('') + '</ul>';
  }

  document.querySelector('#noteInput').addEventListener('submit',()=>{
    event.preventDefault();

    text = document.querySelector('#noteInputTextArea')
    // console.log(text.value)
    notesManager.create(new Note(`${text.value}`))
    console.log(notesManager)
    updateList()
  })
})
