const express = require("express");

const router = express.Router();

let users = [
    {
        id: 1,
        name: "Navneet",
        age: 22
    },
    {
        id: 2,
        name: "Rahul",
        age: 23
    }
];

// GET all users
router.get("/", (req, res) => {

    res.json(users);

});

// GET one user
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);

});

// CREATE user
router.post("/", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);

    res.status(201).json(newUser);

});

// UPDATE user
router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.age = req.body.age;

    res.json(user);

});

// DELETE user
router.delete("/:id", (req, res) => {

    const id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(userIndex, 1);

    res.json({
        message: "User deleted"
    });

});

module.exports = router;