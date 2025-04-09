import express from "express";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.json({ message: "Hello World!", user: "Simon" });
});

// Start server
app.listen(port, () => {
    console.log(` > Server started at http://localhost:${port}`);
});

