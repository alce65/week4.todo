import { useContext } from 'react';
import { TodoContext } from '../../../../infrastructure/context/todo/context';
import { Task } from '../../models/task';
import styles from './task.item.module.css';

export function TaskItem({ item }: { item: Task }) {
    const { handlerEraser, handlerComplete } = useContext(TodoContext);

    const handleClick = () => {
        handlerEraser(item.id);
    };

    const handleChange = () => {
        handlerComplete(item);
    };

    return (
        <li className={styles.host}>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={handleChange}
            />
            <span>{item.id}</span> -<span>{item.title}</span>
            <span className="button" onClick={handleClick}>
                🗑️
            </span>
        </li>
    );
}
