// circle.js
class Circle {
  constructor() {
    this.radius = 10;
  }
}

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Assertion succeeded: " + assertionToCheck + " is truthy");
    }
  }
}
