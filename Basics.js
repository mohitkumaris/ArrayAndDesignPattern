"use strict"
console.log(this === global);

const hero={
  HeroName:"Batman",
  dialogue(){
  console.log(`I am ${this.HeroName}`);
}
}

let print=hero.dialogue.bind(hero);
print()