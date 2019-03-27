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

