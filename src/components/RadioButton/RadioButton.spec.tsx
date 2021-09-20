import * as React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioButton from '.';
import { render } from '../../utils/test/render';

describe('RadioButton', () => {
  it('should render by default', () => {
    const handleChange = jest.fn();

    render(
      <RadioButton
        id="fullname"
        label="Show full name"
        checked={false}
        value="show_fullname"
        onChange={handleChange}
      />,
    );

    const radio = screen.getByLabelText(/show full name/i) as HTMLInputElement;
    expect(radio.checked).toBe(false);

    userEvent.click(radio);

    expect(handleChange).toHaveBeenCalledWith('show_fullname');
  });
});
