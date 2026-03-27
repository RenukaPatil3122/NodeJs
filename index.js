const fs = require("node:fs/promises");

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

console.log("first");
fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log("second");

// const fs = require("node:fs");

// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("third");

// fs.writeFileSync("./greet.txt", "hello world");

// fs.writeFile("./greet.txt", " hello renuka", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file written");
//   }
// });
