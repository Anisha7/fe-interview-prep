import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store/ReduxState";
import { AddTaskItem, TaskListItem } from "./helpers";

const TodoListApp: React.FunctionComponent = () => {
  const { task } = useSelector((state: ReduxState) => state);
  const totalTasks = task.length;
  return (
    <div>
      <h1>TODO LIST</h1>
      <AddTaskItem totalTasks={totalTasks} />
      <ul>
        {task?.map((t) => {
          return <TaskListItem task={t} />;
        })}
      </ul>
    </div>
  );
};

export default TodoListApp;
