import Button from "./Button";

const Footer = (props) => {
  const { filter, tasks, setTasks } = props;

  const getTaskStatus = () => {
    const completedCount = tasks.filter(
      (task) => task.status === "COMPLETED"
    ).length;
    const totalCount = tasks.length;
    return `${completedCount} of ${totalCount} tasks completed`;
  };

  const clearCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => task.status !== "COMPLETED");
    setTasks(activeTasks);
  };

  return (
    <>
      {filter !== "LOGS" && (
        <div className="taskStats">
          <p>{getTaskStatus()}</p>
          <Button text="Clear Completed" onClick={clearCompletedTasks} />
        </div>
      )}
    </>
  );
};

export default Footer;