import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [newTask, setNewTask] = useState(""); // State for input value

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); // Clear input field
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>TO-DO LIST</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              <span
                className="task-text"
                onClick={() => toggleTask(index)}
                style={{ fontWeight: task.completed ? "bold" : "normal" }}
              >
                {task.text}
              </span>
              <div className="btn-group">
                <button
                  className={`complete-btn ${task.completed ? "undo" : ""}`}
                  onClick={() => toggleTask(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="footer">
          Created by <a href="https://yourwebsite.com">You</a>
        </p>
      </div>
    </div>
  );
}

export default App;
