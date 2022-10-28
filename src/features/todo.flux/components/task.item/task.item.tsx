import { useTasks } from '../../hooks/use.task';
import { Task } from '../../models/task';
import styles from './task.item.module.css';

export function TaskItem({ item }: { item: Task }) {
    const { handlerEraser, handlerUpdate } = useTasks();

    const handleClick = () => {
        handlerEraser(item);
    };

    const handleChange = () => {
        item.isComplete = !item.isComplete;
        handlerUpdate(item);
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
