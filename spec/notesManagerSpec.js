'use-strict';
describe("notesManager", () => {
  let notesManager;

  beforeEach(function() {
    notesManager = new notesManager
  })

  it("can show a list of notes", () => {
    notesManager.create("Hello")
    expect(notesManager.notesArray.length).toEqual(1)
  })

})