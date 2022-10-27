import { useContext } from 'react';
import { TodoContext } from '../../../../infrastructure/context/todo/context';
import { Task } from '../../models/task';
import { AddTask } from '../add.task/add.task';
import { TaskItem } from '../task.item/task.item';
import styles from './task.list.module.css';

export function TaskList() {
    const title = 'TaskList component';
    const { tasks } = useContext(TodoContext);

    return (
        <section>
            <h2>Tareas</h2>
            <AddTask></AddTask>
            <ul>
                {tasks.map((item: Task) => (
                    <TaskItem item={item}></TaskItem>
                ))}
            </ul>
        </section>
    );
}
