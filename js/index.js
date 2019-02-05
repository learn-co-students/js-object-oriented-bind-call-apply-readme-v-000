let sally { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}.`);
}

let newGreet = greet.bind(sally);

newGreet('bob');

