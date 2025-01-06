import { useState } from "react";
import "./App.css";

function App() {
  const buttons = [
    { text: "All", bgColor: "whitesmoke" },
    { text: "Active", bgColor: "whitesmoke" },
    { text: "Completed", bgColor: "whitesmoke" },
  ];
  const [selectedButton, setSelectedButton] = useState("All");
  const handleClickButton = (selectedButtonText) => {
    setSelectedButton(selectedButtonText);
  };
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddButton = () => {
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleDelete = (index) => {
    const newTask = [...taskList];
    newTask.splice(index,1);
    setTaskList(newTask)
  };
``

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
                  onClick={() => handleClickButton(el.text)}
                  style={{
                    backgroundColor:
                      selectedButton == el.text ? "#3C82F6" : el.bgColor,
                  }}
                  className="tab"
                >
                  {" "}
                  {el.text}{" "}
                </button>
              );
            })}
          </div>
          <div className="taskList">
            {taskList.map((task) => {
              return (
                <div>
                  <input type="checkbox" className="checkBox"/>
                  <p>{task}</p>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
