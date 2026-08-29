

let buffer1=Buffer.alloc(10)
let buffer2=Buffer.alloc(10,'a')


console.log(buffer1);
console.log(buffer2);


let buffer3=Buffer.from('hello')
let buffer4=Buffer.from('hello','utf-8')

console.log(buffer3);
console.log(buffer4);


console.log(buffer3.toString());
console.log(buffer3.toString('hex'));



