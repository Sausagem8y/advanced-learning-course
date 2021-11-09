function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();
  function littleBrother() {
    return "no me!";
  }
}

// Before running this code, what do you think the output is?

bigBrother();

// IIFE  immediate initiated function expression
(function () {
  console.log("5");
})();

let dragon = {
  name: "tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return "i am ${this.name}, the breather of fire";
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());
