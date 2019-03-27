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

  function character(name, Nickname, Race, Origin, Attack, Defense) {
    return {
        name, Nickname, Race, Origin, Attack, Defense,

        Weapon: {   
            name: '',
            description:''
        },
        describe: function() {
            console.log( `${this.name} is a ${this.Race} from ${this.Origin}`);
        },
        evaluateFight: function (character)
        {
            //attack and defense values. If defense exceeds attack,
            return `Your opponent takes ${this.actuallyFight(this.Attack, character.Defense)} damage and you receive 
            ${this.actuallyFight(character.Attack, this.Defense)} damage`;
        },
        actuallyFight: function (attack, defense)
        {
            if (defense>=attack)
                return 0;
            
            return attack-defense;
        }
    }
}

const arrayOfCharacters =   [
['Gandalf the White ', 'gandalf' , 'Wizard', 'Middle Earth', 10, 6],
['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1 ],
['Frodo Baggins', 'frodo', 'Hobbit', 'The Shire',3,2],
['Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain',6,8],
['Legolas', 'legolas','Elf','Woodland Realm',8,5]

];

let characters = [];

arrayOfCharacters.forEach(char=>{

    const newCharacter = character(...char);
    characters.push(newCharacter)

});

const newCharacter = character('Arwen Undomiel', 'arwen', 'Half-Elf',  'Rivendell', 22, 22);
characters.push(newCharacter);
characters.find(char=>char.Nickname === 'aragorn').describe();
let showOnlyHobbits = characters.filter(char=>char.Race==='Hobbit');
let awesomeAttackers = characters.filter(char=>char.Attack > 5);

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
 

  const findOne = function (arr, query)
  {
    let found =  arr.find(hero=>Object.keys(query).every(key => hero[key]===query[key]));
    if (found)
    {
        return found;
    } else
    {
        return 'null';
    }
  }

  console.log(findOne(HEROES, { squad: 'Justice League'}));


  const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    }
  };

  const findOneDB = function (Database, query)
  {
    let found =  Database.store.heroes.find(hero=>Object.keys(query).every(key => hero[key]===query[key]));
    if (found)
    {
        return found;
    } else
    {
        return 'null';
    }
  }


  console.log(findOneDB(Database, { name: 'Iron Man'}));