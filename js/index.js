// use this to copy code snippets or use your browser's console
function greet(customerOne, customerTwo) {
	console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
```

Now, when we invoke `greet`, not only do we need to explicitly set `this`, but
we also need to pass values for `customerOne` and `customerTwo`.

Using `call`, we pass the object for `this` as the first argument, followed by
any function arguments in order.

```js
let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
	console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');
// Hi Terry and George, my name is Sally!
```
