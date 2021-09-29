import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test/render';
import NamePreview from './NamePreview';

describe('NamePreview component:', () => {
  test('renders by default', () => {
    render(<NamePreview state="To Be">child string</NamePreview>);

    expect(screen.getByText(/child string/i)).toBeVisible();
    expect(screen.getByText(/to be/i)).toBeVisible();
  });
});
