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
    const updatedTasks = tasks.map((task) => {
      if (task.status === "COMPLETED") {
        return {
          ...task,
          status: "DELETED",
          logs: [...task.logs, { action: "Deleted", time: new Date().toLocaleString() }],
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      {filter !== "LOGS" && (
        <div className="taskStats">
          <div className="taskStat">
          <p>{getTaskStatus()}</p>
          <Button text="Clear Completed" onClick={clearCompletedTasks} />
          </div>
        <div className="origin"> 
          <p>Powered by</p>
          <a href="https://pinecone.mn/"> Pinecone academy </a>
        </div>
        </div>

      )}
    </>
  );
};

export default Footer;