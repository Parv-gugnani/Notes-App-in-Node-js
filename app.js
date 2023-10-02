// const add = require("./utils.js");
const validator = require("validator");
const getNotes = require("./notes.js");
// const fs = require("fs");

// fs.writeFileSync("notes.txt", "This file was created by Parv.js");
// fs.appendFileSync("notes.txt", "\nhello");
// const sum = add(4, 2);
// const msg = getNotes();
// console.log(msg);
// console.log(sum);

// checking if it is email or not
console.log(validator.isEmail("parv@example.com"));

//check url
console.log(validator.isURL("example@"));
