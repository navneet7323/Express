const fs =require("fs");


const WriteSream=fs.createWriteStream('output.txt');

WriteSream.write('hello worls\n')
WriteSream.write('hello world\n')
WriteSream.write('line end\n')


WriteSream.on('finish',()=>{
    console.log('all data written');
    
})
