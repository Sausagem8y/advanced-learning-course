// ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

const peter = new Elf("Peter", "stones");
console.log(peter instanceof Elf);
console.log(peter.attack());
const sam = new Elf("Sam", "fire");
console.log(sam.attack());

// cunstructor Functions

// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function () {
//   return "attack with " + this.weapon;
// };

// const peter = new Elf("peter", "stones");
// console.log(peter.attack());
// const sam = new Elf("sam", "fire");
// console.log(sam.attack());

// const Elf1 = new Function(
//   "name",
//   "weapon",
//   `  this.name = name;
// this.weapon = weapon;`
// );

// const sara = new Elf1("Sara", "fireworks");
// console.log(sara);

// object.create
// const elfFunctions = {
//   attack() {
//     return "attack with " + this.weapon;
//   },
// };
// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const peter = createElf("peter", "stones");
// // peter.attack = elfFunctions.attack;
// peter.attack();
// console.log(peter.attack());
// const sam = createElf("sam", "fire");
// // sam.attack = elfFunctions.attack;
// sam.attack();
// console.log(sam.attack());
