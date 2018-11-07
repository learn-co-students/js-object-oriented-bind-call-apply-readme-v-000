// use this to copy code snippets or us your browser's console
// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }
//
// greet(); // my name is , hi!
//
// let person = {
//     name: 'Bob',
//     greet: greet
// };
//
// person.greet();

let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
