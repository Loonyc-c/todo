import Button from "./Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TAB_BUTTONS = [
  { text: "All", status: "ALL" },
  { text: "Active", status: "ACTIVE" },
  { text: "Completed", status: "COMPLETED" },
  { text: "Logs", status: "LOGS" },
];

const Header = (props) => {
  const { tasks, setTasks, setFilter, filter } = props;
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask === "") {
      alert("Please enter a task.");
      return;
    }
    const task = {
      id: uuidv4(),
      text: newTask,
      status: "ACTIVE",
      logs: [{ action: "Added", time: new Date().toLocaleString() }],
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const changeFilter = (status) => {
    setFilter(status);
  };

  return (
    <>
      <h1 className="title">To-Do List</h1>
      <div className="newTaskContainer">
        <input
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button
          text="Add"
          onClick={addTask}
          style={{
            outline: "none",
          }}
        />
      </div>

      <div className="filterContainer">
        {TAB_BUTTONS.map((button) => (
          <Button
            key={button.status}
            onClick={() => changeFilter(button.status)}
            text={button.text}
            style={{
              backgroundColor: filter === button.status ? "#3C82F6" : "#F3F4F6",
              color: filter === button.status ? "white" : "black",
              outline: "none",
              height: "32px",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Header;