const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Define a Todo Schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// Create a Todo model
const Todo = mongoose.model('Todo', todoSchema);

// API routes

// Get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
});

// Add a new todo
app.post('/api/todos', async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({
    text,
  });
  
  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);  // Send the new todo back as response
  } catch (error) {
    res.status(400).json({ message: 'Error adding todo', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
