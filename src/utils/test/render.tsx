import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { theme } from '../../theme';
import SkillProvider from '../../contexts/skills';

const AllTheProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SkillProvider>{children}</SkillProvider>
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
