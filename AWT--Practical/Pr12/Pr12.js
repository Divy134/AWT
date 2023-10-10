const fs = require("fs");

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}

function FileContents(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
}

const filePath = "temp.txt";

console.log("reading file");
readFileAsync(filePath, FileContents);
console.log("Asynchronous file read operation initiated.");
