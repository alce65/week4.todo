import styles from './_basic.module.css';

export function Basic() {
    const title = 'Basic component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
        </div>
    );
}
