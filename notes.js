const fs = require("fs");

const getNotes = function () {
  return "Your Notes...";
};

const addNotes = function (title, body) {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
};

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
};
