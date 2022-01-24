import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle, theme } from './theme';
import SkillProvider from './contexts/skills';
import ConfigProvider from './contexts/config';

ReactDOM.render(
  <React.StrictMode>
    <SkillProvider>
      <ConfigProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ConfigProvider>
    </SkillProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
