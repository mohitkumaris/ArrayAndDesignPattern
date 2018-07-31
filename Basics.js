"use strict"
//console.log(this === global);

const hero={
  HeroName:"Batman",
  dialogue(){
  console.log(`I am ${this.HeroName}`);
}
};

let print=hero.dialogue.bind(hero);
//print();


const posts = [
  {id: 1, title: 'Title 1'},
  {id: 2, title: 'Title 2'}
];
const updatedPosts = posts.map(p => p.id !== 1 ? p : {...p, title: 'Updated Title 1'}
);

console.log(updatedPosts);

/*
updatedPosts is now
[
  {id: 1, title: 'Updated Title 1'},
  {id: 2, title: 'Title 2'}
];
*/