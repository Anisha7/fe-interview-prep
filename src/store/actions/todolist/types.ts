// define actions
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    dateCreated: Date;
}

type ActionPayloadType = {
    task: Task;
    isCompleted?: boolean;
};

// define action types 
export type AddActionType = {
    type: string;
    payload: ActionPayloadType;
}

export type UpdateActionType = {
    type: string;
    payload: ActionPayloadType;
}

export type DeleteActionType = {
    type: string;
    payload: ActionPayloadType;
}

export type ActionTypes = AddActionType | UpdateActionType | DeleteActionType

export default ActionTypes;