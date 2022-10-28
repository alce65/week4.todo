// Función pura
// recibe un estado y una acción
// retorna un NUEVO estado (NO HAY MUTACIÓN)

import { Task } from '../models/task';
import { Action } from './action.creator';
import { actionTypes } from './action.types';

export function tasksReducer(state: Array<Task>, action: Action) {
    // const initialTasks: Array<Task> = [];
    let payload: Task;
    switch (action.type) {
        case actionTypes.load:
            return action.payload as Array<Task>;
        case actionTypes.add:
            payload = action.payload as Task;
            return [...state, payload];
        case actionTypes.update:
            payload = action.payload as Task;
            return state.map((item) =>
                item.id === payload.id ? payload : item
            );
        case actionTypes.delete:
            payload = action.payload as Task;
            return state.filter((item) => item.id !== payload.id);
        default:
            return [...state];
    }
}
