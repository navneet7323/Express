const express = require("express");

const app = express();

const userRoutes = require("./routers/userroutes");

// Middleware to read JSON data
app.use(express.json());

// Use user router
app.use("/users", userRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});