

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

let person = {
    name: 'Bob',
    greet: greet
};


let sally = { name: 'Sally' };

greet.call(sally);

greet.apply(sally);
