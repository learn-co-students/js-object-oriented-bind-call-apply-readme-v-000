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
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    };
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

console.log(billy.matchInterests(freeMusic));
// When the matchInterests method is invoked,
// this refers to the User instance context receiving the method call.
// We are in that context when our callback function is defined.
// Using bind here lets us keep this referring to the User context.
