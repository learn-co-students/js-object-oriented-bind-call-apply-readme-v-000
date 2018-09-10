// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
greet();
// my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet();
// my name is Bob, hi!


let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!


let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally);

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is !

class User {
    constructor(name, favoriteBand) {
        this.name = name;
        this.favoriteBand = favoriteBand;
    }
    favoriteBandMatches(bands) {
        console.log('in User scope: ', this.favoriteBand);
        return bands.filter(
            function(band) {
                console.log('in the anonymous function scope: ', this.favoriteBand);
                return band == this.favoriteBand;
            }.bind(this)
        )[0];
    }
}

let billy = new User('billy', 'paul simon');
billy.favoriteBandMatches(['paul simon', 'the kooks']);
// 'paul simon'
