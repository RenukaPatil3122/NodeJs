const upperCase = require("upper-case");

function greet(name) {
  console.log(upperCase(`Hello hi ${name}`));
}
greet("ren");
module.exports = greet;
