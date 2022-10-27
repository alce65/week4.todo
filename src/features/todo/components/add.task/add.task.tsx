import styles from './add.task.module.css';

export function AddTask() {
    const title = 'AddTask component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
        </div>
    );
}
