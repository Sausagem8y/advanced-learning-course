// this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new personalbar("Xavier", 24);
person1;

// implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi" + this.name);
  },
};

// explicit binding
const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("hi" + this.setTimeout);
  }.bind(window),
};

person3.hi;
