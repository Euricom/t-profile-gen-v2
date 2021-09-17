import styled from 'styled-components';

const sliderIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAyNiAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjhWMEgyNlYyOEwxMyAzOEwwIDI4WiIgZmlsbD0iIzZBQjE0QyIvPgo8L3N2Zz4K';

export const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${({ theme }) => theme.colors.neutral[900]};
  cursor: pointer;
  height: 1px;
  margin: 0;
  opacity: 1;
  width: 100%;

  // Chrome, Opera, Safari, Edge
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-image: url(${sliderIcon});
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    cursor: pointer;
    height: 15px;
    width: 10px;
  }

  // Firefox
  ::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: url(${sliderIcon});
    background-position: 50%;
    border-radius: 0;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    height: 15px;
    width: 10px;
  }

  :disabled {
    opacity: 0.5;
  }

  :hover {
    opacity: 0.8;
  }

  :focus {
    outline: none;
  }

  // Chrome, Opera, Safari, Edge
  :focus::-webkit-slider-runnable-track {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.neutral[100]}`};
    transition: all 300ms;
  }

  // Firefox
  :-moz-focusring {
    outline: ${({ theme }) => `3px solid ${theme.colors.neutral[100]}`};
    outline-offset: -1px;
    transition: outline 300ms;
  }
`;
