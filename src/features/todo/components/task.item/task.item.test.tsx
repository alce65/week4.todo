import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Task } from '../../models/task';
import { TaskItem } from './task.item';

describe('Given TaskItem component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            const mockTask = new Task('', '');
            // Otra alternativa gracias al duck typing sería:
            // const mockTask: Task = {id: 0, title: '', responsible: '', isComplete: false}
            render(
                <Router>
                    <TaskItem item={mockTask} />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('TaskItem', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
