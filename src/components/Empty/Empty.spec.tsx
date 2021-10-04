import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test/render';
import Empty from './Empty';

describe('Empty component:', () => {
  test('renders by default', () => {
    render(<Empty />);

    expect(screen.getByRole('img', { name: /information icon/i })).toBeVisible();
    expect(screen.getByText(/add skills to see a preview of your t-profile./i)).toBeVisible();
  });
});
