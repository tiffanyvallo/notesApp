document.addEventListener("DOMContentLoaded", ()=> {
  var notesManager = new Manager();

  document.querySelector('#noteInput').addEventListener('submit',()=>{
    event.preventDefault();

    text = document.querySelector('#noteInputTextArea')
    // console.log(text.value)
    notesManager.create(new Note(`${text.value}`))
    console.log(notesManager)
  })


})
