const fs=require('fs');

// const data=fs.readFileSync('file.txt','utf-8')
// console.log(data);
// console.log('syncorounus');



fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
    
});

console.log('this run first');
