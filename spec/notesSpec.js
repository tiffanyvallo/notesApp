// circle-tests.js
//descibe Circle

// it 'tests that the radius defaults to 10' do
function testCircleRadiusDefaultsTo10() {

  var circle = new Circle();
  //expect thing to equal thing
  assert.isTrue(circle.radius === 10);

};

// // an intentionally failing test
// function testCircleRadiusDefaultsTo1000() {
//
//   var circle = new Circle();
//   //expect thing to equal thing
//   assert.isTrue(circle.radius === 1000);
//
// };

testCircleRadiusDefaultsTo10();
// testCircleRadiusDefaultsTo1000();
