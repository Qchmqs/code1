var Person = require("./Person.js");

let bob = new Person("Bob", 50);
let jon = new Person("Jon", 15);

if (jon.is_older(bob)) {
  console.log(`${jon.name} is older`);
} else {
  console.log(`${bob.name} is older`);
}

bob.introduce();

const b = async () =>  {
	var a = await bob.save();
	console.log(a);
}

b();

console.log("SAVED");