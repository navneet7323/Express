const crypto = require('crypto');

// Hash
const hash = crypto.createHash('sha256');
hash.update('password123');
console.log(hash.digest('hex'));

// Random bytes
const randomBytes = crypto.randomBytes(32);
console.log(randomBytes.toString('hex'));

// Encrypt/Decrypt
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('secret data', 'utf8', 'hex');
encrypted += cipher.final('hex');