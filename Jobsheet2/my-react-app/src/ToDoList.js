import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Masukkan tugas..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button onClick={addTask}>Tambah</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span> {task} </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
