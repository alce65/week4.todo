import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { TodoFluxContext } from '../../context/context';
import { Task } from '../../models/task';

import { TaskList } from './task.list';

describe('Given TaskList component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            const task1: Task = {
                id: 1,
                title: 'Test task',
                responsible: '',
                isComplete: false,
            };
            const context = {
                tasks: [task1],
                hasError: false,
                handleAdd: jest.fn(),
                handlerEraser: jest.fn(),
                handlerUpdate: jest.fn(),
            };
            render(
                <Router>
                    <TodoFluxContext.Provider value={context}>
                        <TaskList />
                    </TodoFluxContext.Provider>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Tareas', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
        test('Then it should display the tasks', () => {
            const title = new RegExp('Test task', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
