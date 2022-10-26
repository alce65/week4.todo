import styles from './character.module.css';

export function Character() {
    const title = 'Character component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
        </div>
    );
}
