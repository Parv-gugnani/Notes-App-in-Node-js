// const add = require("./utils.js");
// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
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

// console.log(chalk.green.inverse("Success!"));

// chalk for btter knowing

// nodemon is just like sevrer for the termial code

//input frrom user
// console.log(process.argv[2]);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// const command = process.argv[2];

// console.log(process.argv);
// console.log(yargs.argv);

yargs.version("1.1.0");

// create
yargs.command({
  command: "add",
  describe: "Add a note",
  builders: {
    title: { describe: "Note title", demandOptions: true, type: "string" },
    body: { described: "node body", demandOptions: true, type: "string" },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body:" + argv.body);
  },
});

// remove comand

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a new note");
  },
});
yargs.command({
  command: "list",
  describe: "listing a note",
  handler: function () {
    console.log("listing a new note");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a new note");
  },
});

//
//
//add
console.log(yargs.argv);
