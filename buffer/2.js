// Supported encodings:
const encodings = [
    'utf8',      // Default
    'utf16le',   // UTF-16 little-endian
    'latin1',    // Latin-1
    'base64',    // Base64
    'base64url', // Base64 URL-safe
    'hex'        // Hexadecimal
];

const text = 'Hello';

encodings.forEach(encoding => {
    const buf = Buffer.from(text, encoding);


    
    console.log(`${encoding}: ${buf.toString(encoding)}`);
});