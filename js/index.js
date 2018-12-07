// // use this to copy code snippets or us your browser's console
// function greet(name1, name2) {
//   console.log(`my name is ${this.name}, hi!`)
//   console.log(`Hi ${name1}, I'm ${name2}`)
// }
//
// greet()
//
// let person = {
//   name: "Jen",
//   greet: greet,
// }
//
// // person.greet()
// // greet.call(person)
// greet.apply(person)


class Event{
  constructor(title, keywords) {
    this.title = title,
    this.keywords = keywords
  }

}

class User {
  constructor(name, interests) {
    this.name = name,
    this.interests = interests
  }
}
