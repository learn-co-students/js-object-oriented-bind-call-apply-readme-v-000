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

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

let sally = { name: 'Sally' };

greet.apply(sally);
// my name is Sally, hi!

greet.call(sally);
// my name is Sally, hi!

class User {
    constructor(name, favoriteBand) {
        this.name = name;
        this.favoriteBand = favoriteBand;
    }

    favoriteBandMatches(bands) {
        console.log('in User scope: ', this.favoriteBand);
        return bands.filter(function (band) {
            console.log('in the anonymous function scope: ', this.favoriteBand);
            return band == this.favoriteBand;
        }.bind(this)
        )[0];
    }
}

let billy = new User('billy', 'paul simon');
billy.favoriteBandMatches(['paul simon', 'the kooks']);