import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTask, updateTask, deleteTask } from "../../store/actions/todolist";
import { Task } from "../../store/actions/todolist/types";

export const StyledTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: auto;
`;

export const StyledTaskListItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 10px;
  padding: 0;
  width: 100%;
`;

export const StyledTaskListItem = styled.li`
  text-decoration: none;
`;

export interface TaskListItemProps {
  task: Task;
}

export const TaskListItem: React.FunctionComponent<TaskListItemProps> = ({
  task,
}) => {
  const dispatch = useDispatch();
  return (
    <StyledTaskListItem>
      <input
        type="checkbox"
        name={task.title}
        value={task.title}
        checked={task.isCompleted}
        // user cannot set task as incomplete once marking as complete
        disabled={task.isCompleted}
        onClick={() => dispatch(updateTask(task, true))}
        alt={task.title}
      />
      <label>{task.title}</label>
      <button onClick={() => dispatch(deleteTask(task))}>x</button>
    </StyledTaskListItem>
  );
};

export const AddTaskItem: React.FunctionComponent<{ totalTasks: number }> = ({
  totalTasks,
}) => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState<string>("");
  return (
    <>
      <input
        type="text"
        alt="enter new task title"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("ADDING", taskTitle);
          dispatch(
            addTask({
              title: taskTitle,
              id: totalTasks + 1,
              isCompleted: false,
              dateCreated: Date.now(),
            })
          );
        }}
      >
        Add
      </button>
    </>
  );
};
