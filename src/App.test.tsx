import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import {fireEvent} from '@testing-library/react';

import App from './App';
import data from './data';

describe('App Component', () => {

    it('should display the number of birthdays', () => {
        render(<App/>);

        expect(
            screen.getByText(`${data.length} birthdays today`)
        ).toBeInTheDocument();
    });

    it('should render all birthdays', () => {
        render(<App/>);

        data.forEach((person) => {
            expect(screen.getByText(person.name)).toBeInTheDocument();
        });
    });

    it('should clear all birthdays when clicking the button', () => {
        render(<App/>);

        const button = screen.getByRole('button', {
            name: /clear all/i,
        });

        fireEvent.click(button);

        expect(
            screen.getByText('0 birthdays today')
        ).toBeInTheDocument();

        data.forEach((person) => {
            expect(screen.queryByText(person.name)).not.toBeInTheDocument();
        });
    });

});