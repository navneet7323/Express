const { error } = require("console");
const fs = require("fs");
const { data } = require("react-router-dom");

const readStream = fs.createReadStream("data.txt", {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});

readStream.on("data", (chunk) => {
  console.log(data);
});

readStream.on('end',()=>{
    console.log(`no more data`);
    
})


readStream.on('error',(error)=>{
    console.error('Error'.error)
})