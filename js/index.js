// use this to copy code snippets or use your browser's console

class Event {
  constructor(title, keywords) {
    this.title = title;
    this.keywords = keywords;
  }
}

class User {
  constructor(name, interests){
    this.name = name;
    this.interests = interests;
  }
  matchInterests(event){
    return event.keywords.some(
      function(word){
        return this.interests.includes(word);
      }.bind(this)
    );
  }
}

let kat = new User('kat', ['music, movies, books']);
let freemovies = new Event('Free Rooftop Movie Viewings', ['free', 'rooftop', 'movie']);
kat.matchInterests(freemovies);
