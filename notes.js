const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your Notes...";
};

// adding , checking
const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title && note.body === body;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new notes added");
  } else {
    console.log(chalk.blue.inverse("Note is already added"));
  }
  // adding // checking if it is already in the notes
};

//removing notes
const removeNotes = function (title) {
  const notes = loadNotes();

  const updatedNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("Not Found!"));
  } else {
    console.log(chalk.green.inverse("Removed!"));
    saveNotes(updatedNotes);
  }
};

//

// saving

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = function () {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJson = databuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
};
