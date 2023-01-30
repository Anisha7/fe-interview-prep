import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../store/actions/todolist";
import { Task } from "../../store/actions/todolist/types";
export interface TaskListItemProps {
  task: Task;
}

export const TaskListItem: React.FunctionComponent<TaskListItemProps> = ({
  task,
}) => {
  const dispatch = useDispatch();
  return (
    <>
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
    </>
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
