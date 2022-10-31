// import { emoji } from '../../data/emojis';
import styles from './icon.module.css';

export function Icon({ category }: { category: string }) {
    const title = 'Icon component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
            {/* <i className="emoji">{emoji[category]}</i> */}
        </div>
    );
}
