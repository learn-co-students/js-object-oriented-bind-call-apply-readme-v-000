// use this to copy code snippets or us your browser's console
class Event{
  constructor(title, keywords){
    this.titl = title;
    this.keywords = keywords;
  }
}

class User{
  constructor(name, interests){
    this.name = name;
    this.interests = interests;
  }
  matchInterests(event){
    return even.keywords.some(function(word){
      return this.interests.includes(word).bind(this);
    });
  }
}
