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

function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}


function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}
