class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    console.log(this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, friend) {
    super(name, weapon);
    this.friend = friend;
  }
  makeSwamp() {
    return "Greatest swamp in the world made";
  }
}

const dobby = new Elf("dobby", "spoilers", "dead");
const shrek = new Ogre("Shrek", "Divine Miracles", "Eddie Murphy");
console.log(shrek.makeSwamp());
console.log(dobby.attack());
console.log(dobby instanceof Character);
