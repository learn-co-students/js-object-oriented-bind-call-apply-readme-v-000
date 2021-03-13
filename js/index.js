function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
 
let sally = { name: 'Bob'};
 
greet.call(sally);

greet.apply(sally)