const fs = require("fs");

// Create a New File Synchronously
fs.writeFileSync("Note.txt","This is created by FS Modlue");

// IF File is existed it will overwrite data
fs.writeFileSync("Note.txt","Updated!!  This is created by FS Modlue");

// Append File Synchronous
fs.appendFileSync("Note.txt","\nAgain I m updating"); 

// Read file synchronously
const buff_data = fs.readFileSync("Note.txt");

// To Read in string format
console.log(buff_data.toString());