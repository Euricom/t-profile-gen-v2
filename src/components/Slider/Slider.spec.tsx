import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Slider from './Slider';

describe('Slider component:', () => {
  test('renders by default', () => {
    const onChangeMock = jest.fn();

    render(<Slider ariaLabel="test aria label" onChange={onChangeMock} value={0} />);

    expect(screen.getByRole('slider', { name: /test aria label/i })).toBeVisible();
  });

  test('returns event on change', () => {
    const onChangeMock = jest.fn();

    render(<Slider ariaLabel="test aria label" onChange={onChangeMock} value={0} />);

    const sliderElement = screen.getByRole('slider', { name: /test aria label/i });
    fireEvent.change(sliderElement, { target: { value: 25 } });
    expect(onChangeMock).toBeCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toBeCalledWith(expect.objectContaining({ _reactName: 'onChange' }));
  });

  test('renders disabled state', () => {
    const onChangeMock = jest.fn();

    render(<Slider ariaLabel="test aria label" isDisabled value={0} onChange={onChangeMock} />);

    const sliderElement = screen.getByRole('slider', { name: /test aria label/i });

    expect(sliderElement).toBeDisabled();
  });
});
