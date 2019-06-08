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

  // matchInterests(event) {
  //   return event.keywords.some(function(word) {
  //     return this.interests.includes(word);
  //   }.bind(this)); //to bind billy to this
  // }

  matchInterests(event) {
    return event.keywords.some(word => this.interests.includes(word));
  } // this refers to the User instance context
}

let billy = new User('Billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
billy.matchInterests(freeMusic);


function greet() {
  console.log(`my name is ${this.name}, hi!`);
}
greet(); //this is referring to the global object, window

let person = {
  name: 'Bob',
  greet: greet
};

person.greet(); //this changes to refer to the objet the method is invoked in


//force functions to be executed in other contexts with call and apply
let sally = {name: 'Sally'};
greet.call(sally);
greet.apply(sally);

function greeting(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let kathy = {name: 'Kathy'};
greeting.call(kathy, 'Terry', 'George');
greeting.apply(kathy, ['Terry', 'George']);

//context-bound version of the function with bind
//the orifinal function will not be changed
let newGreeting = greeting.bind(kathy);
newGreeting('Bob', 'Stacy');
