const fs=require('fs')

// Macrotasks (Callback queue)
setTimeout(() => {
    console.log('Timeout callback');
}, 0);

setInterval(() => {
    console.log('Interval callback');
}, 1000);

// I/O callbacks
fs.readFile('file.txt', () => {
    console.log('File read complete');
});