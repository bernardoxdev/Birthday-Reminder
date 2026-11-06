import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import List from './List';

const mockPeople = [
    {
        id: 1,
        name: 'Bernardo',
        age: 21,
        image: 'bernardo.jpg',
    },
    {
        id: 2,
        name: 'Maria',
        age: 25,
        image: 'maria.jpg',
    },
];

describe('List Component', () => {

    it('should render all people', () => {
        render(<List people={mockPeople} />);

        expect(screen.getByText('Bernardo')).toBeInTheDocument();
        expect(screen.getByText('Maria')).toBeInTheDocument();
    });

    it('should display the correct ages', () => {
        render(<List people={mockPeople} />);

        expect(screen.getByText('21 years')).toBeInTheDocument();
        expect(screen.getByText('25 years')).toBeInTheDocument();
    });

    it('should render the correct images', () => {
        render(<List people={mockPeople} />);

        const image = screen.getByAltText('Bernardo');

        expect(image).toHaveAttribute('src', 'bernardo.jpg');
    });

    it('should render an empty list when there are no people', () => {
        const { container } = render(<List people={[]} />);

        expect(container.querySelectorAll('.person')).toHaveLength(0);
    });

});