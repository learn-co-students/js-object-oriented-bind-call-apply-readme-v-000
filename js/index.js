function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
greet();

let person = {
  name: 'Bob' ,
  greet: greet
};

person.greet();

let sally = {name: "Sally"};

greet.apply(sally);

let juju = {name: "Juju"};

greet.call(juju);

//call() - differs from apply() in they way args are passed in

let suzie = {name: 'Suzie'};

function greeting(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`)
}
//pass the object for this as the first arg, followed by any function args in order
greeting.call(suzie, 'Terry', 'George')

//apply() only takes two args: the value of this and an array of function args

greeting.apply(suzie, ['Kriti', 'Robbie'])

//Using bind
let jerome = { name: 'Jerome' };

function newGreet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newNewGreet = newGreet.bind(jerome);

newNewGreet('Bob');
// Hi Bob, my name is Jerome!

newGreet('Bob');
// Hi Bob, my name is !


//More examples for bind()
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
