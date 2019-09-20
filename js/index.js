// use this to copy code snippets or use your browser's console

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let person = {
    name: 'Bob',
    greet: greet
};

let sally = {name: 'Sally'};

// function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// }

// greet.call(sally, 'Terry', 'George');

// greet.apply(sally, ['Terry', 'George']);

let newGreet = greet.bind(sally);

newGreet('Bob');

greet('Bob');

greet.bind(sally)('Bob');

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
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
console.log(billy.matchInterests(freeMusic));