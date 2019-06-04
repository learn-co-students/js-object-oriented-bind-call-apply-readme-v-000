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

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);