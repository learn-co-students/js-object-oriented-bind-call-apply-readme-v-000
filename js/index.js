// use this to copy code snippets or us your browser's console
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
