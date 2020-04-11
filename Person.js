var axios = require('axios');

class Person {

  constructor(name, age) {
    this.port = 8009;
    this.id = 0;
    this.name = name;
    if (typeof age === "number") {
      this.age = age;
    } else {
      throw new Error("Age is not a number");
    }
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }

  introduce() {
    console.log(`I am ${this.age} years old`);
  }

  rename(name) {
    this.name = name;
  }

  is_older(other) {
    return this.age > other.age;
  }

  save() {
    axios.post(`http://localhost:${this.port}/save`, { name: this.name, age: this.age }).then(function() { console.log('POST')}).catch(function(err){
      console.error(err);
    }) ;
  }

  load() {
    axios.get(`http://localhost:${this.port}/load`).then(function(data) {
      return JSON.parse(data);
    });
  }
}

module.exports = Person;
