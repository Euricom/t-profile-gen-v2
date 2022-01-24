import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test/render';
import NamePreview from './NamePreview';

describe('NamePreview component:', () => {
  test('renders by default', () => {
    render(
      <NamePreview color="#000000" state="To Be">
        child string
      </NamePreview>,
    );

    const childElement = screen.getByText(/child string/i);

    expect(childElement).toBeVisible();
    expect(screen.getByText(/to be/i)).toBeVisible();
    expect(childElement).toHaveStyleRule('color', '#000000');
  });
});
