import { createCharacters } from '../../services/characters';
import { CharacterCard } from '../character/character.card';
import styles from './character.list.module.css';

export function CharacterList() {
    const title = 'CharacterList component';
    const characters = createCharacters();
    console.log(characters);
    return (
        <div className={styles.host}>
            <p>{title}</p>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => (
                        <CharacterCard key={item.name} character={item} />
                    ))}
                </ul>
            </div>
            <div className="communications"></div>
        </div>
    );
}
