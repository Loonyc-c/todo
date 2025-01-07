import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const buttons = [
    { text: "All", bgColor: "whitesmoke", status: "ALL" },
    { text: "Active", bgColor: "whitesmoke", status: "ACTIVE" },
    { text: "Completed", bgColor: "whitesmoke", status: "COMPLETED" },
  ];
  const [selectedButton, setSelectedButton] = useState("All");
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleClickButton = (selectedButtonText) => {
    setSelectedButton(selectedButtonText);
    if (newTask.length === 0) {
      return false
    } else {
      setTaskList([
        ...taskList,
        { description: newTask, status: "ALL", id: uuidv4() },
      ]);
      setNewTask("");
    }
  };
  const handleAddButton = () => {
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleDelete = (index) => {
    const newTask = [...taskList];
    newTask.splice(index, 1);
    setTaskList(newTask);
  };
  const handleTaskCheckBox = (id) => {
    const tasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, status: "COMPLETED" };
      } else return task;
    });
    setTaskList(tasks);
  };
  const handeleFilterStateChange = (state) => {
    setSelectedButton(state);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="title">To-Do List</h1>
          <div className="newTaskContainer">
            <input
              id="input"
              placeholder="Add a new task"
              value={newTask}
              type="text"
              onChange={handleInputChange}
            />
            <button className="newTaskButton" onClick={handleAddButton}>
              Add
            </button>
          </div>
          <div className="filterContainer">
            {buttons.map((el) => {
              return (
                <button
                  onClick={() => {handeleFilterStateChange(el.status),handleClickButton(el.text)}}
                  style={{
                    backgroundColor:
                      selectedButton == el.text ? "#3C82F6" : el.bgColor,
                  }}
                  className="tab"
                >
                  {el.text}
                </button>
              );
            })}
          </div>
          <div className="taskList">
            {taskList
              .map((task) => {
                return (
                  <div>
                    <input type="checkbox" className="checkBox" />
                    <p>{task}</p>
                    <button onClick={handleDelete}>Delete</button>
                  </div>
                );
              })
              .filter((task) => {
                if (selectedButton === "All") {
                  return true;
                } else {
                  return task.status === selectedButton;
                }
              })
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
