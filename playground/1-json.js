const fs = require("fs"); // Add this line to require the fs module

// const book = {
//   title: "Ego is the Enemy",
//   author: "Parv",
// };

// // stringify ---- object to data
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);
// console.log(bookJSON);

//parse ------ data to object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

//
// const dataBuffer = fs.readFileSync("1-json.json"); //read
// const dataJSON = dataBuffer.toString(); //converting
// console.log(dataBuffer.toString()); //printing
// console.log(data.title);

// challange
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Gunther";
user.age = 54;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
