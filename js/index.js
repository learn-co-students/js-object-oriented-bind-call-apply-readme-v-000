function greet() {
    // `this` here will be in the global context, thus undefined and will not return a value.
    console.log(`my name is ${this.name}, hi!`);
}
let sally = { name: 'Sally' };
greet(); // LOG: my name is , hi!
greet(sally); // LOG: my name is , hi!
sally.greet(); // => Uncaught TypeError: sally.greet is not a function

greet.call(sally); // LOG: my name is Sally, hi!
greet.apply(sally); // LOG: my name is Sally, hi!


function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
let sally = { name: 'Sally' };
greet.call(sally, "Bob", "Tom"); // LOG: Hi Bob and Tom, my name is Sally!
greet.apply(sally, ["Bob", "Tom"]); // LOG: Hi Bob and Tom, my name is Sally!


let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
greet('Bob'); // LOG: Hi Bob, my name is !
newGreet('Bob'); // LOG: Hi Bob, my name is Sally!
newGreet.call(sally, "Bob"); // LOG: Hi Bob, my name is Sally!
newGreet.apply(sally, ["Bob"]); // LOG: Hi Bob, my name is Sally!


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
                // here, `this` is within the context of this inner anonymous function, and thus is undefined
                return this.interests.includes(word);
            }.bind(this) // bind added to the end of the callback function here makes a reference to the onject that matchInterest is called on
        );
    }
}
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
billy.matchInterests(freeMusic); // => true


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
        // here, `this` refers to the object that calls the parent function as the arrow funtion doens't have its own this, so it referes to its lexical context and is hoisted
        return event.keywords.some(word => this.interests.includes(word));
    }
}
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
billy.matchInterests(freeMusic); // => true