import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { theme } from '../../theme';

const AllTheProviders: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
