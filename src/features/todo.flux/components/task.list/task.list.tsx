import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoFluxContext } from '../../context/context';
import { Task } from '../../models/task';
import { AddTask } from '../add.task/add.task';
import { TaskItem } from '../task.item/task.item';
// import styles from './task.list.module.css';

export function TaskList() {
    const title = 'Tareas';
    const { tasks, hasError } = useContext(TodoFluxContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('home');
    };
    return (
        <section>
            <h2>{title}</h2>
            <AddTask></AddTask>
            <ul>
                {tasks.map((item: Task) => (
                    <TaskItem key={item.id} item={item}></TaskItem>
                ))}
            </ul>
            <dialog open={hasError}>
                <p>Error</p>
                <button onClick={handleClick}>Continuar</button>
            </dialog>
        </section>
    );
}
