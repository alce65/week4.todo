import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { TodoFluxContext } from '../../context/context';
import { Task } from '../../models/task';
import { TaskItem } from './task.item';

describe('Given TaskItem component', () => {
    describe('When we render the component', () => {
        let mockTask: Task;
        let context: {
            tasks: Task[];
            hasError: boolean;
            handleAdd: jest.Mock;
            handlerEraser: jest.Mock;
            handlerUpdate: jest.Mock;
        };
        beforeEach(() => {
            mockTask = new Task('Test task', '');
            // Otra alternativa gracias al duck typing sería:
            // const mockTask: Task = {id: 0, title: '', responsible: '', isComplete: false}

            context = {
                tasks: [mockTask],
                hasError: false,
                handleAdd: jest.fn(),
                handlerEraser: jest.fn(),
                handlerUpdate: jest.fn(),
            };

            const task1: Task = {
                id: 1,
                title: 'Test task',
                responsible: 'Pepe',
                isComplete: false,
            };

            render(
                <Router>
                    <TodoFluxContext.Provider value={context}>
                        <TaskItem item={mockTask} />
                    </TodoFluxContext.Provider>
                    ;
                </Router>
            );
        });
        test('Then it should display the task values', () => {
            // const title = new RegExp('Test task', 'i');
            const element = screen.getByText(mockTask.title);
            expect(element).toBeInTheDocument();
        });
        test('Then it should have a button for delete', () => {
            // const title = new RegExp('Test task', 'i');
            const element = screen.getByRole('button');
            expect(element).toBeInTheDocument();
            userEvent.click(element);
            expect(context.handlerEraser).toHaveBeenCalled();
        });
        test('Then it should have a check for complete', () => {
            // const title = new RegExp('Test task', 'i');
            const element = screen.getByRole('checkbox');
            expect(element).toBeInTheDocument();
            userEvent.click(element);
            expect(context.handlerUpdate).toHaveBeenCalled();
        });
    });
});
