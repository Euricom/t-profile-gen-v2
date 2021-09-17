import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test/render';
import Checkbox from './Checkbox';

describe('Checkbox component:', () => {
  test('renders by default', () => {
    render(<Checkbox labelText="Test Checkbox" name="Test Name" />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });

    expect(checkboxElement).toBeVisible();
    expect(checkboxElement).toHaveAttribute('name', 'Test Name');
    expect(checkboxElement).not.toBeChecked();
  });

  test('renders checked state', () => {
    render(<Checkbox isChecked labelText="Test Checkbox" name="Test Name" />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });
    expect(checkboxElement).toBeChecked();
  });

  test('renders unchecked state', () => {
    render(<Checkbox isChecked={false} labelText="Test Checkbox" name="Test Name" />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });
    expect(checkboxElement).not.toBeChecked();
  });

  test('returns event on change', () => {
    const onChange = jest.fn();

    render(<Checkbox isChecked={false} labelText="Test Checkbox" name="Test Name" onChange={onChange} />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });
    fireEvent.click(checkboxElement);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith(expect.objectContaining({ _reactName: 'onChange' }));
  });

  test('renders disabled state', () => {
    render(<Checkbox isDisabled labelText="Test Checkbox" name="Test Name" />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });

    expect(checkboxElement).toBeDisabled();
  });

  test('renders disabled checked state', () => {
    render(<Checkbox isChecked isDisabled labelText="Test Checkbox" name="Test Name" />);

    const checkboxElement = screen.getByRole('checkbox', { name: /test checkbox/i });

    expect(checkboxElement).toBeDisabled();
    expect(checkboxElement).toBeChecked();
  });
});
