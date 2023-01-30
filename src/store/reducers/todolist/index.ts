import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  Task,
} from "../../actions/todolist/types";
// Can use AnyAction for any action type
import { AnyAction } from "redux";

const defaultState: Array<Task> = [];

const TaskReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload.task];
    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.task.id) {
          return { ...task, isCompleted: action.payload.isCompleted };
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.task.id);
    default:
      return state;
  }
};

export default TaskReducer;
