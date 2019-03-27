/* eslint-disable strict */
function createMyObject() {
  const myObject = {
    'foo' : 'bar',
    'answerToUniverse' : 42,
    'olly olly' : 'oxen free',
    'sayHello' : function () {
      return 'hello';
    } 
  };
  return myObject;
}

function updateObject(obj) {

  const newObject = {
    foo : 'foo',
    bar : 'bar',
    bizz : 'bizz',
    bang : 'bang'
  };

  Object.assign(obj, newObject);
  return obj;
} 
