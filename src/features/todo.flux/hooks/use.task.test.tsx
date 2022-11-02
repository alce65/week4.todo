import { renderHook, waitFor } from '@testing-library/react';
import { ITask, Task } from '../models/task';
import { useTasks } from './use.task';
import { TaskApi } from '../services/task.api';

jest.mock('../services/task.api');

const task1 = {
    title: 'Added task',
    responsible: '',
    isComplete: false,
};
const newTask = {
    title: 'Added task',
    responsible: '',
    isComplete: false,
};

describe('Given', () => {
    let result: {
        current: {
            tasks: Array<Task>;
            handleAdd: (newTask: ITask) => void;
            handlerEraser: (task: Task) => void;
            handlerUpdate: (updateTask: Task) => void;
        };
    };

    beforeEach(() => {
        TaskApi.prototype.getTasks = jest.fn().mockResolvedValue([task1]);
        TaskApi.prototype.createTask = jest.fn().mockResolvedValue(newTask);
        ({ result } = renderHook(() => useTasks()));
    });

    test('should first', async () => {
        await waitFor(() => {
            expect(result.current.tasks).toEqual([task1]);
        });
    });

    test('should first b', async () => {
        await waitFor(() => {
            result.current.handleAdd(newTask);
            expect(result.current.tasks.at(-1)).toEqual(newTask);
        });
    });
});
