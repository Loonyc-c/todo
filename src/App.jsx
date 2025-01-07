import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const buttons = [
    { text: "All", status: "ALL" },
    { text: "Active", status: "ACTIVE" },
    { text: "Completed", status: "COMPLETED" },
  ];

  const [filter, setFilter] = useState("ALL");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask === "") {
      alert("yum bicheech sda ve")
      return
    };
    const task = { id: uuidv4(), text: newTask, status: "ACTIVE" };
    console.log("New Task ID:", task.id);
    setTasks([...tasks, task]);
    setNewTask("");
    console.log(tasks)
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, status: task.status === "COMPLETED" ? "ACTIVE" : "COMPLETED"
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id !== id) {
        updatedTasks.push(tasks[i]);
      }
    setTasks(updatedTasks);
  };

  const changeFilter = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    return task.status === filter;
  });
  const getTaskStats = () => {
    const completedCount = tasks.filter((task) => task.status === "COMPLETED").length;
    const totalCount = tasks.length;
    return `${completedCount} of ${totalCount} tasks completed`;
  };

  const clearCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => task.status !== "COMPLETED");
    setTasks(activeTasks);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">To-Do List</h1>

        <div className="newTaskContainer">
          <input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask} style={{
            outline: "none"
          }}>Add</button>
        </div>

        <div className="filterContainer">
          {buttons.map((button) => (
            <button
              key={button.status}
              onClick={() => changeFilter(button.status)}
              style={{
                backgroundColor: filter === button.status ? "#3C82F6" : "#F3F4F6",
                color: filter === button.status ? "white" : "black",
                outline: "none",
                height: "32px"
              }}
            >
              {button.text}
            </button>
          ))}
        </div>

        <div className="taskList">
          {filteredTasks.map((task) => (
            <div key={task.id} className="taskItem">
              <input
                type="checkbox"
                checked={task.status === "COMPLETED"}
                onChange={() => completeTask(task.id)}
              />
              <p
                style={{
                  textDecoration: task.status === "COMPLETED" ? "line-through" : "none",
                }}
              >
                {task.text}
              </p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="taskStats">
          <p>{getTaskStats()}</p>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}
}
export default App;
