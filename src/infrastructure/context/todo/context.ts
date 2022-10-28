import { createContext } from 'react';
import { ITask, Task } from '../../../features/todo/models/task';

const initialContext: {
    tasks: Array<Task>;
    handleAdd: (newTask: ITask) => void;
    handlerEraser: (deletedID: number) => void;
    handlerComplete: (task: Task) => void;
} = {
    tasks: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    handlerComplete: () => undefined,
};

export const TodoContext = createContext(initialContext);
