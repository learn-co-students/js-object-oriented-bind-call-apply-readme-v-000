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
      console.log("'this' is defined: ", this);
      return event.keywords.some(function(word) {
          console.log("'this' is now undefined: ", this);
          return this.interests.includes(word);
      });
  }
}