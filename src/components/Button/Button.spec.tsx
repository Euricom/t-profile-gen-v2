import React from 'react';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/test/render';
import Button from './Button';

describe('Button component:', () => {
  test('renders by default', () => {
    const onClickMock = jest.fn();

    render(
      <Button onClick={onClickMock}>
        Test Button
        <div data-testid="children" />
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveStyleRule('background-color', '#4eb439');
    expect(buttonElement).toHaveStyleRule('font-size', '1rem');

    const childElement = within(buttonElement).getByTestId('children');
    expect(childElement).toBeVisible();

    userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('renders variant', () => {
    const onClickMock = jest.fn();

    render(
      <Button onClick={onClickMock} variant="secondary">
        Test Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveStyleRule('background-color', '#f3f3f3');
  });

  test('renders types', () => {
    const onClickMock = jest.fn();

    render(
      <Button onClick={onClickMock} type="submit">
        Test Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('renders sizes', () => {
    const onClickMock = jest.fn();

    render(
      <Button onClick={onClickMock} size="large">
        Test Button
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveStyleRule('font-size', '1.2rem');
  });
});
