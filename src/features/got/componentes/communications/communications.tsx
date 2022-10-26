import styles from './communications.module.css';

export function Communications() {
    const title = 'Communications component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
        </div>
    );
}
