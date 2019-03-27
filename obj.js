/* eslint-disable indent */
/* eslint-disable strict */
const loaf = {

    flour: 300,
    water: 210,
    hydration: function () {
        return (this.water/this.flour)*100;
    }
};

const probTwo = {
    'foo' : 1,
    'bar': 2,
    'fum' : 3,
    'quux' : 4,
    'spam' : 5
};

for (let x in probTwo){
    console.log(`${x} ${probTwo[x]}`); 
}


const meals =['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'];

console.log(meals[3]);

let Rich = {
    name : 'richard',
    jobTitle : 'thinkful teacher',
    boss: 'Jarod'
};

let Lauren = {
    name : 'Lauren',
    jobTitle : 'Thinkful Prog Manager'
  
}; 

let Jarod = {
    name : 'Jarod',
    jobTitle : 'Thinkful Mentor',
    boss: 'Lauren'
};

let probFour = [Rich, Lauren, Jarod];

probFour.forEach(person => {
    person.boss ? console.log(`"${person.jobTitle} ${person.name} reports to ${person.boss}."`)
     : console.log(`"${person.jobTitle} ${person.name} doesn't report to anybody"`)
    }
    );

let cipher = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
};

function decoder (sentence) {
    let eChars = [];
    eChars = sentence.split(' ');
    const dChars = eChars.map(function (char) {
      if (cipher[char.charAt(0)]){
        return char.charAt(cipher[char.charAt(0)]);
      }
      else {
          return " ";
      }

    });
    return dChars.join('');
  }
    
  let eCode = 'craft block argon meter bells brown croon droop';
  console.log(decoder(eCode));

  
  
