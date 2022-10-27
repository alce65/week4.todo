import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AddTask } from './add.task';

describe('Given AddTask component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <AddTask />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('AddTask', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
