const SuperHero = require("./super-hero");

const batman = new SuperHero("batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("superman");
console.log(superman.getName());
