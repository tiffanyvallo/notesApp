// circle-tests.js
//descibe Circle

// it 'tests that the radius defaults to 10' do
function testCircleRadiusDefaultsTo10() {

  var circle = new Circle();
  //expect thing to equal thing
  assert.isTrue(circle.radius === 10);

};

testCircleRadiusDefaultsTo10();

console.log('notes spec file!')
