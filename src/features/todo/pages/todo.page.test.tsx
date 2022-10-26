import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import TodoPage from './todo.page';

describe('Given TodoPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <TodoPage />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Todo', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
