import * as React from 'react';
import { screen } from '@testing-library/react';
import { ConfigContext, initialValue } from '../../../contexts/config';
import { render } from '../../../utils/test/render';
import ProfileConfig from '.';

describe('ProfileConfig', () => {
  it('should render by default', () => {
    const handleNameConfig = jest.fn();

    render(
      <ConfigContext.Provider value={{ config: initialValue, handleNameConfig }}>
        <ProfileConfig />
      </ConfigContext.Provider>,
    );

    const showFullNameCheckbox = screen.getByLabelText(/show full name/i);
    expect(showFullNameCheckbox).toBeChecked();

    const fullNameColorPick = screen.getByLabelText(/full name color/i);
    expect(fullNameColorPick).toHaveAttribute('color', initialValue.fullName.color);
  });
});
