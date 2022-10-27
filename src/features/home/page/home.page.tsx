import { useContext } from 'react';
import { TodoContext } from '../../../infrastructure/context/todo/context';

function HomePage() {
    const { tasks } = useContext(TodoContext);
    return (
        <main>
            <h2>Home page</h2>
            <p>Taras: {tasks.length}</p>
        </main>
    );
}

export default HomePage;
