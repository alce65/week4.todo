import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { TaskList } from './task.list';

describe('Given TaskList component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <TaskList />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('TaskList', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
