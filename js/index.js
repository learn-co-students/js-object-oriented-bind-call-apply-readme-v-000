function greet(customerOne, customerTwo) {
  console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}, hi!`)
}

greet();
// Hi undefined and undefined, my name is , hi!

let person = {
  name: 'Bob',
  greet: greet
};

person.greet();
// Hi undefined and undefined, my name is Bob, hi!

let sally = { name: 'Sally' };

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally, hi!

greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally, hi!

let newGreet = greet.bind(sally);

newGreet('Bob');
// Hi Bob and undefined, my name is Sally, hi!

greet('Bob');
// Hi Bob and undefined, my name is , hi!

greet.bind(sally)('Bob');
// Hi Bob and undefined, my name is Sally, hi!

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
      }.bind(this)    // added to the end of the callback function, keeps this referring to User context
    );
  }

  // could replace with
  // matchInterests(event) {
  //    return event.keywords.some(word => this.interests.includes(word));
  // }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);
