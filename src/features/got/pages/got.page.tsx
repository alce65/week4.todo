import { CharacterList } from '../componentes/character.list/character.list';
import { Communications } from '../componentes/communications/communications';
import styles from './got.page.module.css';
function GotPage() {
    return (
        <div className={styles.container}>
            <main>
                <h2>Game of Trons</h2>
                <CharacterList></CharacterList>
                <Communications></Communications>
            </main>
        </div>
    );
}

export default GotPage;
