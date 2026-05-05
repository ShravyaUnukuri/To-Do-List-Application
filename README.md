# MERN To-Do List Application

A full-stack web application for managing your daily tasks using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Create, read, update, and delete (CRUD) todos
- Mark todos as complete/incomplete
- Clean and intuitive user interface
- RESTful API backend

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Package Manager**: npm

## Project Structure

```
mern-todo-app/
├── backend/
│   ├── models/
│   │   └── Todo.js          # Todo database model
│   ├── routes/
│   │   └── todoRoutes.js    # API routes for todos
│   ├── server.js            # Express server configuration
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Application styles
│   │   ├── index.js         # React entry point
│   │   └── index.css        # Global styles
│   └── package.json         # Frontend dependencies
└── README.md                # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas connection string)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Create new todos by entering a task and clicking "Add"
3. Click the checkbox to mark todos as complete
4. Delete todos by clicking the delete button

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.
