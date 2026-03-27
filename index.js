function greet(name) {
  console.log(`hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Renuka";
  callback(name);
}

higherOrderFunction(greet);
