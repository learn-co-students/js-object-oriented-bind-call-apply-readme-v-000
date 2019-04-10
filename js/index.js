let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

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
    return event.keywords.some(word => this.interests.includes(word));
  }
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);

