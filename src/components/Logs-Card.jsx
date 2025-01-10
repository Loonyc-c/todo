const LogsCard = (props) => {
  const { tasks } = props;
  return (
    <div className="logsContainer">
      {tasks.length === 0 && <p className="emptyMessage">No Logs !</p>}

      {tasks.length !== 0 &&
        tasks.map((task) => (
          <div key={task.id} className="taskLogs">
            <h4>Task: {task.text}</h4>
            {task.logs.map((log, index) => (
              <p key={index}>
                {log.action}: {log.time}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
};

export default LogsCard;
