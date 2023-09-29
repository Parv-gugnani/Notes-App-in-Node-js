const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Parv.js");
fs.appendFileSync("notes.txt", "\nhello");
