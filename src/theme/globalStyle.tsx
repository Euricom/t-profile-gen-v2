import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// fontsource import
import '@fontsource/roboto/400.css'; // Roboto Regular
import '@fontsource/roboto/700.css'; // Roboto Bold

//  global styles go here
const GlobalStyle = createGlobalStyle`
  ${reset};  
  body {
    font-family : Roboto, Helvetica Neue, Arial, sans-serif
  }
`;

export default GlobalStyle;
