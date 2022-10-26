import { Character } from '../character/character';
import styles from './character.list.module.css';

export function CharacterList() {
    const title = 'CharacterList component';
    return (
        <div className={styles.host}>
            <p>{title}</p>
            <Character></Character>
        </div>
    );
}
