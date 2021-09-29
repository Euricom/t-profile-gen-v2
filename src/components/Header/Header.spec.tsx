import React from 'react';
import { screen, within } from '@testing-library/react';
import { render } from '../../utils/test/render';
import Header from './Header';

describe('Header component:', () => {
  test('renders by default', () => {
    render(<Header>Header Title</Header>);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeVisible();

    const headerTitleElement = within(headerElement).getByRole('heading', { name: /header title/i });
    expect(headerTitleElement).toBeVisible();
  });
});
