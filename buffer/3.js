const fs = require("fs");

// // Read file as buffer
// const buf = fs.readFileSync("image.png");
// console.log(buf.length); // File size in bytes

// // Write buffer to file
// fs.writeFileSync("copy.png", buf);

// Stream with buffer
const readStream = fs.createReadStream("large-file.txt");
const chunks = [];

readStream.on("data", (chunk) => {
  chunks.push(chunk); // chunk is a Buffer
});


readStream.on("end", () => {
  const completeBuffer = Buffer.concat(chunks);
  console.log(completeBuffer.toString());
});
