// use this to copy code snippets or us your browser's console
//  .call()
let sally = { name: 'Sally' };
 
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
 
greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!

// .apply()
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!


//.bind()
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
    // OR
    // matchInterests(event) {
    //     return event.keywords.some(
    //         function(word) {
    //             return this.interests.includes(word);
    //         }.bind(this) // added to the and of the callback function
    //     );
    // }
}
 
let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
 
billy.matchInterests(freeMusic);