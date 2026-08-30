
const express = require("express");
const mysql = require("mysql2");

const app = express();

// Middleware
app.use(express.json());


// MySQL Connection


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NewPassword@123",
    database: "testdb",
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");

    // Create Students table
    const creationQuery = `
    CREATE TABLE IF NOT EXISTS Students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE
    )
  `;

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log("Table creation failed:", err.message);
            return;
        }

        console.log("Students table is ready!");
    });
});


// GET - Home Route


app.get("/", (req, res) => {
    res.send("Hello World");
});


// GET - Get All Students


app.get("/students", (req, res) => {
    const query = "SELECT * FROM Students";

    connection.execute(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Failed to fetch students",
                error: err.message,
            });
        }

        res.json({
            message: "Students fetched successfully",
            students: results,
        });
    });
});


// GET - Get Student By ID


app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    const query = "SELECT * FROM Students WHERE id = ?";

    connection.execute(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch student",
                error: err.message,
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json({
            message: "Student found",
            student: results[0],
        });
    });
});


// POST - Create Student


app.post("/students", (req, res) => {
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    const query = `
    INSERT INTO Students (name, email)
    VALUES (?, ?)
  `;

    connection.execute(query, [name, email], (err, result) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Failed to create student",
                error: err.message,
            });
        }

        res.status(201).json({
            message: "Student created successfully",
            student: {
                id: result.insertId,
                name: name,
                email: email,
            },
        });
    });
});


// PUT - Update Student


app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    const query = `
    UPDATE Students
    SET name = ?, email = ?
    WHERE id = ?
  `;

    connection.execute(query, [name, email, id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to update student",
                error: err.message,
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json({
            message: "Student updated successfully",
        });
    });
});


// DELETE - Delete Student


app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    const query = "DELETE FROM Students WHERE id = ?";

    connection.execute(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to delete student",
                error: err.message,
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json({
            message: "Student deleted successfully",
        });
    });
});


// Start Express Server


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

