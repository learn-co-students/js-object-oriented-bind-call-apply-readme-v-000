// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet(); // my name is Bob, hi!

let sally = { name: 'Sally' };
function greet2(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
greet2.call(sally, 'Terry', 'George');
greet2.apply(sally, ['Terry', 'George']);



function greet3(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet3.bind(sally); // newGreet is context-bound to sally

newGreet('Bob');
// Hi Bob, my name is Sally!

greet('Bob');
// Hi Bob, my name is !

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
    matchInterests2(event) {
      return event.keywords.some(word => this.interests.includes(word));
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
