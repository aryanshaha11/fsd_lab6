const express = require("express");
const app = express();
app.use(express.json()); // To parse JSON body

let books = [];

// GET: Retrieve all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST: Add a new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
