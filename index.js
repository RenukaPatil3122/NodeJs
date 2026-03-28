setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() => console.log("this is process.nextTick 1"));
  Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("inner setImmediate 1"));
//   process.nextTick(() => console.log("inner process.nextTick 1"));
//   Promise.resolve().then(() => console.log("inner Promise.resolve 1"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("ST 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}
