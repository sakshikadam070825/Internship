// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [
  { id: 1, title: "The Alchemist brotherhood", author: "Yasuhiro Irie" },
  { id: 2, title: "Bleach", author: "Tite Kubo" },
  { id: 3, title: "kny", author: "Koyoharu Gotouge" }
];

// GET /books - Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  if (!id || !title || !author) {
    return res.status(400).json({ message: 'Missing id, title, or author' });
  }
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book added successfully' });
});

// PUT /books/:id - Update book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ message: 'Book updated successfully' });
});

// DELETE /books/:id - Delete book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
