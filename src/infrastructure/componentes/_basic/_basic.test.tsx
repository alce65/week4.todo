import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Basic } from './_basic';

describe('Given Basic component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Basic />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('Basic', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
