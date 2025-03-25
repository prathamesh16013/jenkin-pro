const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Jenkins! Your Node.js app is running.");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

