import {
  Task,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  AddActionType,
  UpdateActionType,
  DeleteActionType,
} from "./types";

// define action methods
export const addTask = (task: Task): AddActionType => {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  };
};

export const updateTask = (
  task: Task,
  isCompleted: boolean
): UpdateActionType => {
  return {
    type: UPDATE_TASK,
    payload: {
      task,
      isCompleted,
    },
  };
};

export const deleteTask = (task: Task): DeleteActionType => {
  return {
    type: DELETE_TASK,
    payload: { task },
  };
};

export default {
  addTask,
  updateTask,
  deleteTask,
};
