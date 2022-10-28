import { useEffect, useMemo, useState } from 'react';
import { Task } from '../../../features/todo/models/task';
import { TaskApi } from '../../../features/todo/services/task.api';

import { TodoContext } from './context';

export function TodoContextProvider({ children }: { children: JSX.Element }) {
    const initialTasks: Array<Task> = [];
    const [tasks, setTasks] = useState(initialTasks);
    const api = useMemo(() => {
        return new TaskApi();
    }, []);

    useEffect(() => {
        //Asincronia
        api.getTasks().then((tasks) => setTasks(tasks));
    }, [api]);

    const handleAdd = (newTask: Task) => {
        api.createTask(newTask).then((task: Task) => {
            setTasks([...tasks, task]);
        });
    };

    const handlerEraser = (deletedID: number) => {
        api.deleteTask(deletedID).then((response) => {
            if (response.ok) {
                setTasks(tasks.filter((item) => item.id !== deletedID));
            }
        });
    };

    const handlerUpdate = (updateTask: Task) => {
        api.updateTask(updateTask.id, updateTask).then((task) => {
            tasks.map((item) => (item.id === task.id ? task : item));
        });
    };

    const handlerComplete = (task: Task) => {
        api.updateTask(task.id, { isComplete: !task.isComplete }).then(
            (task) => {
                tasks.map((item) =>
                    item.id === task.id
                        ? { ...item, isComplete: !item.isComplete }
                        : item
                );
            }
        );
    };
    const context = {
        tasks,
        handleAdd,
        handlerEraser,
        handlerComplete,
    };
    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
