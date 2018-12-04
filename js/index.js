// use this to copy code snippets or use your browser's console

// original
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

let sally = { name: 'Sally' };

// FOR USE WITH CALL OR APPLY
let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
// greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

// greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!

// BIND
let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

let newGreet = greet.bind(sally); // newGreet is context-bound to sally
// newGreet('Bob');
// Hi Bob, my name is Sally!
// greet('Bob');
// Hi Bob, my name is !
// INVOKE IMMEDIATELY
greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!

// ALTERNATE BIND
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

billy.matchInterests(freeMusic);

// NOW WITH ARROW FUNCTIONS
matchInterests(event) {
  return event.keywords.some(word => this.interests.includes(word));
}
// "arrow functions don't have their own this, so this will refer to whatever context the arrow function was invoked in"
