import 'styled-components';

// extending types of default theme
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    colors: {
      neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string; // main
        600: string;
        700: string;
        800: string;
        900: string;
      };
      'euri-grey': string;
    };
  }
}
