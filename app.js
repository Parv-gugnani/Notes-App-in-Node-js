// const add = require("./utils.js");
// const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");
// const fs = require("fs");
// const chalk = require("chalk");

// fs.writeFileSync("notes.txt", "This file was created by Parv.js");
// fs.appendFileSync("notes.txt", "\nhello");
// const sum = add(4, 2);
// const msg = getNotes();
// console.log(msg);
// console.log(sum);

// checking if it is email or not
// console.log(validator.isEmail("parv@example.com"));

// //check url
// console.log(validator.isURL("example@"));

console.log(chalk.green.inverse("Success!"));

// chalk for btter knowing

// nodemon is just like sevrer for the termial code

//input frrom user
// console.log(process.argv[2]);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
