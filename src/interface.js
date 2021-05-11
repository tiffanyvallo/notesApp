document.addEventListener("DOMContentLoaded", ()=> {
  var notesManager = new Manager();
  console.log(notesManager)

  document.querySelector('#noteInput').addEventListener('submit',()=>{
    event.preventDefault();
    notesManager.create(new Note())
    console.log(notesManager)
  })


})
