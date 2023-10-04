// const add = require("./utils.js");
// const validator = require("validator");
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

// exp

// code

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes"); // Import your notes module

yargs.version("1.1.0");

// Create a command to add a note
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
    body: { describe: "Note body", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// Create a command to remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: { describe: "Note title", demandOption: true, type: "string" },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

// Create a command to list notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes");
  },
});

// Create a command to read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a new note");
  },
});

// Parse the command-line arguments
yargs.parse();
