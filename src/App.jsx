import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LogsCard from "./components/Logs-Card";
import TodoCard from "./components/Todo-Card";

function App() {
  const [filter, setFilter] = useState("ALL");

  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <div className="container">
        <Header
          tasks={tasks}
          filter={filter}
          setTasks={setTasks}
          setFilter={setFilter}
        />
        {filter !== "LOGS" && (
          <TodoCard filter={filter} tasks={tasks} setTasks={setTasks} />
        )}
        {filter === "LOGS" && <LogsCard tasks={tasks} />}

        <Footer filter={filter} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;