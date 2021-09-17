import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { render } from '../../utils/test/render';
import TextInput from '.';

describe('TextInput', () => {
  it('should render by default', () => {
    const handleChangeMock = jest.fn();

    render(<TextInput data-testid="input" onChange={handleChangeMock} value="testValue" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveValue('testValue');

    userEvent.type(input, '123');

    expect(handleChangeMock).toBeCalledTimes(3);
  });
});
