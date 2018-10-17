class Event {
  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  }
}

class User {
  constructor(name, interests) {
    this.title = name;
    this.keywords = interests;
  }

  matchInterests(event) {
    return event.keywords.some(function(word) {
      return this.interests.includes(word);
    })
  }
}

let billy = new User('billy', ['music','art','movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);


billy.matchInterests(freeMusic);
