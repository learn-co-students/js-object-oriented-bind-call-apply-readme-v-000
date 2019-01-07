// use this to copy code snippets or use your browser's console

//sample 1 - greet is invoked as a method of an object and as such this is equal to person
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet(); // my name is , hi!
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet(); // my name is Bob, hi!

// sample 2 - using call and apply 
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
let sally = { name: 'Sally' };
 
greet.call(sally);
// my name is Sally, hi!
 
greet.apply(sally);
// my name is Sally, hi!

//Both call and apply let us set the value of this to whatever we pass as the first argument. The difference between the two is how arguments are passed to the function.

// sample 3 - using call and passing in values 

let sally = { name: 'Sally' };
 
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
 
greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

//if no values are passed in then 
greet.call(sally);
// Hi undefined and undefined, my name is Sally!

//sample 4
// *** DIFFERENCE between call and apply 
// The call to apply works similarly to call, except that apply only takes two arguments: the value of this, and then an Array of arguments to pass to the function, like so:
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!


// sample 5 - bind 
//Sometimes, we want to take a function, associate it to a context and return a "context-bound" version of the original function.
// In the above examples the context is set when we use .call or .apply.  bind allows for this to be set and invoked without specifying what 'this' is. 
let sally = { name: 'Sally' };
 
function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
 
greet('Bob');
// Hi Bob, my name is !
//Note that the original greet function is unchanged. 

// Example use:
//we want to create an app that matches user interests with keywords from upcoming events. 
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
            }.bind(this) // added to the end of the callback function
        );
    }
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);

// we need to use bind here so that the value of this in the callback function is not global but User. 