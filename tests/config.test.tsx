import * as React from 'react';
import {describe} from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('Config:Jest', () => {
    test('True equals true', () => {
        expect(true).toEqual(true);
    })
});

describe('Config: testing library', () => {
    test('checks if the element with id textID contains the text "text"', () => {
        render(<div data-testid="textID">text</div>);
        const element = screen.getByTestId('textID');
        expect(element).toHaveTextContent('text');
    });
});