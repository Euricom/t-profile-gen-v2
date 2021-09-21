import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/test/render';
import ColorPicker from './ColorPicker';

describe('ColorPicker component:', () => {
  test('renders by default', () => {
    const onChangeMock = jest.fn();

    render(
      <ColorPicker ariaLabel="Test color picker" color="#4eb439" onChange={onChangeMock}>
        <div data-testid="children" />
      </ColorPicker>,
    );

    const colorPickerSwatchElement = screen.getByRole('button', { name: /test color picker/i });
    const childElement = screen.getByTestId('children');
    expect(colorPickerSwatchElement).toHaveAttribute('aria-label', 'Test color picker');
    expect(colorPickerSwatchElement).toHaveAttribute('type', 'button');
    expect(childElement).toBeVisible();

    expect(colorPickerSwatchElement).toHaveStyleRule('background', '#4eb439');

    fireEvent.click(colorPickerSwatchElement);
    expect(screen.getByTestId('color-picker')).toBeVisible();
    userEvent.click(document.body);
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();

    fireEvent.click(childElement);
    expect(screen.getByTestId('color-picker')).toBeVisible();
    userEvent.click(document.body);
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();

    fireEvent.click(colorPickerSwatchElement);
    expect(screen.getByTestId('color-picker')).toBeVisible();
    userEvent.click(colorPickerSwatchElement);
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();

    fireEvent.click(childElement);
    expect(screen.getByTestId('color-picker')).toBeVisible();
    userEvent.click(childElement);
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();
  });

  // no way to mock mouse movement on the popover (just clicking for now)
  test('returns onchange event when changing saturation', () => {
    const onChangeMock = jest.fn();

    render(
      <ColorPicker ariaLabel="Test color picker" color="#4eb439" onChange={onChangeMock}>
        <div data-testid="children" />
      </ColorPicker>,
    );

    const colorPickerSwatchElement = screen.getByRole('button', { name: /test color picker/i });
    fireEvent.click(colorPickerSwatchElement);

    const saturationPickerElement = screen.getByRole('slider', { name: /color/i });
    fireEvent.mouseDown(saturationPickerElement);

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('returns onchange event when changing hue', () => {
    const onChangeMock = jest.fn();

    render(
      <ColorPicker ariaLabel="Test color picker" color="#4eb439" onChange={onChangeMock}>
        <div data-testid="children" />
      </ColorPicker>,
    );

    const colorPickerSwatchElement = screen.getByRole('button', { name: /test color picker/i });
    fireEvent.click(colorPickerSwatchElement);

    const huePickerElement = screen.getByRole('slider', { name: /hue/i });

    fireEvent.mouseDown(huePickerElement);

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  // no way to mock mouse movement on the popover (just clicking for now)
  test('returns onchange event when clicking color preset', () => {
    const onChangeMock = jest.fn();

    render(
      <ColorPicker ariaLabel="Test color picker" color="#4eb439" onChange={onChangeMock}>
        <div data-testid="children" />
      </ColorPicker>,
    );

    const colorPickerSwatchElement = screen.getByRole('button', { name: /test color picker/i });
    fireEvent.click(colorPickerSwatchElement);

    const presetElement = screen.getByRole('button', { name: /color preset #d9d9d9/i });

    fireEvent.click(presetElement);
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('#d9d9d9');
  });
});
