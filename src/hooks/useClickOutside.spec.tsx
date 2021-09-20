import React, { useCallback } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../utils/test/render';
import useClickOutside from './useClickOutside';

const TestComponent = () => {
  const testRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(true);

  const handleOutsideClick = useCallback(() => setIsOpen(false), []);

  useClickOutside(testRef, handleOutsideClick);

  return <div ref={testRef}>{isOpen && <div>Test content</div>}</div>;
};

describe('useClickOutside hook:', () => {
  test('returns true when clicked outside of target element', () => {
    render(<TestComponent />);

    const targetElement = screen.getByText(/test content/i);

    expect(targetElement).toBeVisible();

    userEvent.click(document.body);
    expect(screen.queryByText(/test content/i)).not.toBeInTheDocument();
  });

  test('return false when clicked on target element', () => {
    render(<TestComponent />);

    const targetElement = screen.getByText(/test content/i);

    expect(targetElement).toBeVisible();

    userEvent.click(targetElement);
    expect(targetElement).toBeInTheDocument();
  });
});
