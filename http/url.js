const url = require('url');

const urlString = 'http://example.com:8080/user?query=value#hash';
const parsedUrl = new URL(urlString);

console.log(parsedUrl.hostname); // example.com
console.log(parsedUrl.port); // 8080
console.log(parsedUrl.pathname); // /path
console.log(parsedUrl.search); // ?query=value
console.log(parsedUrl.searchParams.get('query')); // value
console.log(parsedUrl.hash); // #hash