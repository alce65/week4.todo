import { createContext } from 'react';
import { ITask, Task } from '../../../features/todo/models/task';

export const initialContext: {
    tasks: Array<Task>;
    hasError: boolean;
    handleAdd: (newTask: ITask) => void;
    handlerEraser: (task: Task) => void;
    handlerUpdate: (task: Task) => void;
} = {
    tasks: [],
    hasError: false,
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    handlerUpdate: () => undefined,
};

export const TodoFluxContext = createContext(initialContext);
