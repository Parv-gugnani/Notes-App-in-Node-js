const fs = require("fs");
const chalk = require("chalk");

// const getNotes = () => {
//   return "Your Notes...";
// };

// adding , checking
const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title === title && note.body === body;
  // });

  console.log(duplicateNote);

  // better version of duplicate notes condition much efficient
  if (!duplicateNote) {
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
const removeNotes = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("Not Found!"));
  } else {
    console.log(chalk.green.inverse("Removed!"));
    saveNotes(updatedNotes);
  }
};

//

// saving

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJson = databuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

//listing

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.gray.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.bold.red.inverse("Not Found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
