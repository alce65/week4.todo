import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { TaskItem } from './task.item';

describe('Given TaskItem component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <TaskItem />
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
