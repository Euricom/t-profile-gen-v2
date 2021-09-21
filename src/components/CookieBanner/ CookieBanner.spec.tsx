import React from 'react';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/test/render';
import CookieBanner from './CookieBanner';

describe('CookieBanner component:', () => {
  test('renders by default', () => {
    const onAcceptMock = jest.fn();
    const onDeclineMock = jest.fn();

    render(
      <CookieBanner onAccept={onAcceptMock} onDecline={onDeclineMock}>
        This is a test cookie banner
        <div data-testid="children" />
      </CookieBanner>,
    );

    const cookieBannerElement = screen.getByTestId('cookie-banner');
    const acceptButton = screen.getByRole('button', { name: /accept/i });
    const declineButton = screen.getByRole('button', { name: /decline/i });

    expect(cookieBannerElement).toBeVisible();
    expect(screen.getByText(/this is a test cookie banner/i)).toBeVisible();
    expect(acceptButton).toBeVisible();
    expect(declineButton).toBeVisible();

    const childElement = within(cookieBannerElement).getByTestId('children');
    expect(childElement).toBeVisible();

    userEvent.click(acceptButton);
    expect(onAcceptMock).toHaveBeenCalledTimes(1);

    userEvent.click(declineButton);
    expect(onDeclineMock).toHaveBeenCalledTimes(1);
  });
});
