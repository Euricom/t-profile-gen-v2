import React from 'react';
import styled from 'styled-components';

const sliderIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAyNiAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjhWMEgyNlYyOEwxMyAzOEwwIDI4WiIgZmlsbD0iIzZBQjE0QyIvPgo8L3N2Zz4K';

const StyledSlider = styled.input.attrs(() => ({
  type: 'range',
}))`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #000;
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

  :hover {
    opacity: 0.8;
  }
`;

interface SliderProps {
  ariaLabel: string;
  onChange: () => void;
}

export const WrapperComponent = () => {
  const [boxSize, setBoxSize] = React.useState('50');

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => setBoxSize(event.currentTarget.value);

  return (
    <>
      <StyledSlider aria-label="Generalisme 1 slider" onChange={handleSlider} />
      <div style={{ width: `${boxSize}%`, backgroundColor: 'green', marginTop: '1rem', height: '2rem' }} />
    </>
  );
};

const Slider = ({ ariaLabel, onChange }: SliderProps): JSX.Element => (
  <StyledSlider aria-label={ariaLabel} onChange={() => onChange()} />
);

export default Slider;
