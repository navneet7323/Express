console.log(process.argv[0]);

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

process.env.MY_VAR = "my value";

if (process.env.NODE_ENV === "production") {
  console.log("Running in production");
}

console.log(process.cwd());
console.log(__dirname);

console.log(process.platform);

const PORT = process.env.PORT || 3000;
console.log(`Server will run on port ${PORT}`);
