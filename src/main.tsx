import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle, theme } from './theme';
import SkillProvider from './contexts/skills';

ReactDOM.render(
  <React.StrictMode>
    <SkillProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </SkillProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
