let sally = { name: 'Sally' };

function greet(customer) {
	console.log(`Hi ${customer}, my name is ${this.name}!`);
}

greet.bind(sally)('Bob');
// Hi Bob, my name is Sally!
