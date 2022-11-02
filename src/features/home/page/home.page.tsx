import { useContext } from 'react';
import { TodoContext } from '../../../infrastructure/context/todo/context';
import { Auth } from '../components/auth/auth';

function HomePage() {
    const { tasks } = useContext(TodoContext);
    return (
        <main>
            <h2>Home page</h2>
            <p>Taras: {tasks.length}</p>
            <Auth></Auth>
        </main>
    );
}

export default HomePage;
