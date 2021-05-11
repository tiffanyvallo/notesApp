"use-strict";


function expect(a){
  // return an object with a property to equal which is a function
  return {
    toEqual: function(b){
      if (a == b) {
        console.log('PASS')
      } else {
        console.log('FAIL')
      }
    },
    toTripleEqual: function(b){
      if (a === b) {
        console.log('PASS')
      } else {
        console.log('FAIL')
      }},
    notToEqual: function(b){
      if (a != b) {
        console.log('PASS: a is not the same as b')
      } else {
        console.log('FAIL: a is the same as b!')
      }},
    toBeAnArray: function(){
      if (a.constructor.name == "Array") {
        console.log('PASS: this is an array')
      } else {
        console.log('FAIL: this is not an array')
      }},
    notToBeEmpty: function(){
      if (a.length > 0) {
        console.log('PASS: length is greater than 0 ')
      } else {
        console.log('FAIL: length is 0')
      }
    }
  }
}

function it(input, callback){
  console.log(`TEST: ${input}`)
  callback()
}


it("can start empty", () => {
  var notesManager = new Manager
  expect(notesManager.notesArray.length).toEqual(0)
})

it("can show a list of notes", () => {
  var notesManager = new Manager
  notesManager.create("Hello")
  expect(notesManager.notesArray.length).toEqual(1)
})

it("can create a title from content", () => {
  var note = new Note('Hello note testing created')
  expect(note.title).toEqual('Hello note testing cr...')
})


{
// Test tests
// .length = 0

// it('2 + 2 equals 4',()=>{
//   expect(2+2).toEqual(4)
// })

// it('1 + 2 equals 400',()=>{
//   expect(1+2).toEqual(400)
// })

// it('2 + 2 triple equals 4',()=>{
//   expect(2+2).toTripleEqual(4)
// })

// it('2 + 2 not to equal 55',()=>{
//   expect(2+2).notToEqual(55)
// })

// it('[1,2] to be an array',()=>{
//   expect([1,2]).toBeAnArray()
// })

// it('BOB ROSS not to be empty',()=>{
//   expect("BOB ROSS").notToBeEmpty()
// })
}