import { Task } from '../models/task';
import { actionTypes } from './action.types';

export type Action = {
    type: string;
    payload: Array<Task> | Task;
};

export const loadTaskAction = (tasks: Array<Task>): Action => {
    return {
        type: actionTypes.load,
        payload: tasks,
    };
};

export const addTaskAction = (task: Task): Action => {
    return {
        type: actionTypes.add,
        payload: task,
    };
};

export const updateTaskAction = (task: Task): Action => {
    return {
        type: actionTypes.update,
        payload: task,
    };
};

export const deleteTaskAction = (task: Task): Action => {
    return {
        type: actionTypes.delete,
        payload: task,
    };
};
