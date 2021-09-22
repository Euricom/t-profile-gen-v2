import React from 'react';
import * as S from './styles';
import { SliderProps } from './types';

const Slider = ({ ariaLabel, isDisabled = false, name,onChange, value }: SliderProps): JSX.Element => (
  <S.Slider aria-label={ariaLabel} disabled={isDisabled} min="10" onChange={(event) => onChange(event)}
    value={value}
    name={name}
  />
);

export default Slider;
