// use this to copy code snippets or us your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet();

let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet()