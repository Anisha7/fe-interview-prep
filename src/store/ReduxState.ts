import { Task } from './actions/todolist/types';
export interface ReduxState {
    reducers: {
        Task: Task
    }
}