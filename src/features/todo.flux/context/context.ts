import { createContext } from 'react';
import { ITask, Task } from '../../../features/todo/models/task';

const initialContext: {
    tasks: Array<Task>;
    handleAdd: (newTask: ITask) => void;
    handlerEraser: (task: Task) => void;
    handlerUpdate: (task: Task) => void;
} = {
    tasks: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    handlerUpdate: () => undefined,
};

export const TodoFluxContext = createContext(initialContext);
