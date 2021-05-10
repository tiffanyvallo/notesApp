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
        console.log('PASS')
      } else {
        console.log('FAIL')
      }},
    toBeAnArray: function(){
      if (a.constructor.name == "Array") {
        console.log('PASS: an array')
      } else {
        console.log('FAIL: not an array')
      }}
  }
}

function it(input, callback){
  console.log(`TEST: ${input}`)
  callback()
  // console.log('pass')
}
// we give
it('2 + 2 equals 4',()=>{
  expect(2+2).toEqual(4)
})

it('1 + 2 equals 400',()=>{
  expect(1+2).toEqual(400)
})

it('2 + 2 triple equals 4',()=>{
  expect(2+2).toTripleEqual(4)
})

it('2 + 2 not to equal 55',()=>{
  expect(2+2).notToEqual(55)
})

it('[1,2] to be an array',()=>{
  expect([1,2]).toBeAnArray()
})
