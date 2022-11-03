import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { ITask, Task } from '../models/task';
import { tasksReducer } from '../reducers/reducer';
import { TaskApi } from '../services/task.api';
import * as actions from '../reducers/action.creator';

export function useTasks() {
    const initialState: Array<Task> = [];
    // sin FLUX:
    // const [stateSimple, setStateSimple] = useState(initialState);
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    const api = useMemo(() => {
        return new TaskApi();
    }, []);

    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        api.getTasks()
            .then((tasks) => dispatch(actions.loadTaskAction(tasks)))
            // Sin FLUX
            // setTasks(tasks));
            .catch((error: Error) => {
                console.log(error.message);
                setHasError(true);
            });
    }, [api]);

    const handleAdd = (newTask: ITask) => {
        api.createTask(newTask).then((task: Task) => {
            dispatch(actions.addTaskAction(task));
            //setTasks([...tasks, task]
        });
    };

    const handlerEraser = (task: Task) => {
        api.deleteTask(task.id).then((response) => {
            if (response.ok) {
                dispatch(actions.deleteTaskAction(task));
                //setTasks(tasks.filter((item) => item.id !== deletedID));
            }
        });
    };

    const handlerUpdate = (updateTask: Task) => {
        api.updateTask(updateTask.id, updateTask).then((task) => {
            dispatch(actions.updateTaskAction(task));
            // tasks.map((item) => (item.id === task.id ? task : item));
        });
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return {
        tasks,
        hasError,
        handleAdd,
        handlerEraser,
        handlerUpdate,
    };
}
