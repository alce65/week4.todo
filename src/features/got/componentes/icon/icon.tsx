import styles from './_icon.module.css';

export function Icon() {
    const title = 'Icon component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
        </div>
    );
}
