const EmptyMessages = (props) => {
    const { filter, tasks } = props;
  
    const activeTasks = tasks.filter((task) => task.status === "ACTIVE");
    const completedTasks = tasks.filter((task) => task.status === "COMPLETED");
  
    return (
      <>
        {activeTasks.length === 0 && filter === "ACTIVE" && (
          <p className="emptyMessage">No active task !</p>
        )}
        {completedTasks.length === 0 && filter === "COMPLETED" && (
          <p className="emptyMessage">No completed tasks !</p>
        )}
        {tasks.length === 0 && filter === "ALL" && <p className="emptyMessage">No tasks yet. Add one above!</p>}
      </>
    );
  };
  
  export default EmptyMessages;