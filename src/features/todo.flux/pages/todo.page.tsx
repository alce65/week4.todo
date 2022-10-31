import { TaskList } from '../components/task.list/task.list';
import { TodoFluxContextProvider } from '../context/provider';

function TodoPage() {
    return (
        <TodoFluxContextProvider>
            <main>
                <h2>TodoFlux page</h2>
                <TaskList></TaskList>
            </main>
        </TodoFluxContextProvider>
    );
}

export default TodoPage;
