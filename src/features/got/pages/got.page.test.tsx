import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import GotPage from './got.page';

describe('Given GotPage component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <GotPage />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Game of Trons', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
