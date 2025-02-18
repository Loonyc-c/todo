import Button from "./Button";
import EmptyMessages from "./Empty-Messages";
import { useEffect } from "react";

const TodoCard = (props) => {
  const { filter, tasks, setTasks } = props;

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const newStatus = task.status === "COMPLETED" ? "ACTIVE" : "COMPLETED";
        const logAction =
          newStatus === "COMPLETED" ? "Completed" : "Reactivated";
        return {
          ...task,
          status: newStatus,
          logs: [
            ...task.logs,
            { action: logAction, time: new Date().toLocaleString() },
          ],
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "DELETED",
          logs: [
            ...task.logs,
            { action: "Deleted", time: new Date().toLocaleString() },
          ],
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return task.status !== "DELETED";
    if (filter === "LOGS") return false;
    return task.status === filter;
  });

  return (
    <div className="taskList">
      <EmptyMessages filter={filter} tasks={tasks} />
      {filteredTasks.map((task) => (
        <div key={task.id} className="taskItem">
          <input
            type="checkbox"
            checked={task.status === "COMPLETED"}
            onChange={() => completeTask(task.id)}
          />
          <p
            style={{
              textDecoration:
                task.status === "COMPLETED" ? "line-through" : "none",
            }}
          >
            {task.text}
          </p>
          <Button text="Delete" onClick={() => deleteTask(task.id)} />
        </div>
      ))}
    </div>
  );
};

export default TodoCard;