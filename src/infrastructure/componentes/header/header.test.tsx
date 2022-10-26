import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Header } from './header';

test('renders learn react link', () => {
    render(
        <Router>
            <Header />
        </Router>
    );

    // Learning React

    const element = screen.getByText(/react/i);
    expect(element).toBeInTheDocument();
});
