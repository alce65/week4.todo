import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { ITask, Task } from '../models/task';
import { tasksReducer } from '../reducers/reducer';
import { TaskApi } from '../services/task.api';
import * as actions from '../reducers/action.creator';

export function useTasks() {
    const initialState: Array<Task> = [];
    // const [stateSimple, setStateSimple] = useState(initialState);
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    const api = useMemo(() => {
        return new TaskApi();
    }, []);

    const handleLoad = useCallback(() => {
        api.getTasks().then((tasks) => dispatch(actions.loadTaskAction(tasks)));
        // setTasks(tasks));
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
        handleAdd,
        handlerEraser,
        handlerUpdate,
    };
}
