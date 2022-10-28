import { Task } from '../models/task';

const store = 'Tasks';

export const getStore = (): Array<Task> => {
    const dataString = localStorage.getItem(store);
    if (!dataString) return [];
    return JSON.parse(dataString);
};

export const setStore = (data: Array<Task>) => {
    localStorage.setItem(store, JSON.stringify(data));
};
