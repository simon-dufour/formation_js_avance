import express from "express";
import Todo from "../class/todo.js";
import fs from "fs";

const app = express();
const port = 3000;

const fs = fs();

// Middleware
app.use(express.json());

// Route
app.get("/todos", (req, res) => {
    res.json({});
});

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id: id, status: 'CREATED', title: 'Something todo', content: '...' });
});

app.post("/todos", (req, res) => {
    const body = req.body;
    res.json({ id: 1, status: 'DRAFT', ...body });
});

app.put("/todos/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({ id: id, status: 'UPDATED', ...body });
});

app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    res.json({});
});

// Start server
app.listen(port, () => {
    console.log(` > Server started at http://localhost:${port}`);
});

