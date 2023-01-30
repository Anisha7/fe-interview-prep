import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../store/actions/todolist";
import { Task } from "../../store/actions/todolist/types";
import { ReduxState } from "../../store/ReduxState";

interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FunctionComponent<TaskListItemProps> = ({ task }) => {
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
    </>
  );
};

const AddTaskItem: React.FunctionComponent<{ totalTasks: number }> = ({
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
