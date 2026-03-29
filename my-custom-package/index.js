const upperCase = require("upper-case");

function greet(name) {
  console.log(upperCase(`Hello ${name}`));
}
greet("ren");
module.exports = greet;
