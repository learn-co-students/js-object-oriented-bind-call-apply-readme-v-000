// use this to copy code snippets or use your browser's console
function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let person = {
    name: 'Bob',
    greet: greet
};

let sally = { name: 'Sally' };