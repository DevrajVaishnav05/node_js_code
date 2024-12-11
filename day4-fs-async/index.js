const fs = require("fs");

fs.writeFile("read.txt", "Today is an awesome day", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
  } else {
    console.log("File written successfully");
  }
});
