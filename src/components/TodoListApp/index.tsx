import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store/ReduxState";
import {
  AddTaskItem,
  StyledTaskListContainer,
  TaskListItem,
  StyledTaskListItemsContainer,
} from "./helpers";

const TodoListApp: React.FunctionComponent = () => {
  const { task } = useSelector((state: ReduxState) => state);
  const totalTasks = task.length;
  return (
    <StyledTaskListContainer>
      <h1>TODO LIST</h1>
      <AddTaskItem totalTasks={totalTasks} />
      <StyledTaskListItemsContainer>
        {task?.map((t) => {
          return <TaskListItem task={t} />;
        })}
      </StyledTaskListItemsContainer>
    </StyledTaskListContainer>
  );
};

export default TodoListApp;
