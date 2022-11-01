import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { Task } from '../models/task';

import { TodoFluxContext, initialContext } from './context';

describe('Given the context AppContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeAll(() => {
            const task: Task = {
                id: 1,
                title: 'Test task',
                responsible: 'Pepe',
                isComplete: true,
            };
            initialContext.handleAdd(task);
            initialContext.handlerEraser(task);
            initialContext.handlerUpdate(task);
            initialContext.tasks = [task];
        });
        beforeEach(() => {
            TestComponent = () => {
                const { tasks } = useContext(TodoFluxContext);
                return <>{tasks[0].title}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <TodoFluxContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </TodoFluxContext.Provider>
            );
            const element = screen.getByText(
                initialContext.tasks[0].title as string
            );
            expect(element).toBeInTheDocument();
        });
    });
});
