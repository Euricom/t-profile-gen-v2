import React from 'react';
import * as S from './styles';
import { SliderProps } from './types';

const Slider = ({ ariaLabel, isDisabled = false, onChange, value }: SliderProps): JSX.Element => (
  <S.Slider aria-label={ariaLabel} disabled={isDisabled} onChange={(event) => onChange(event)} value={value} />
);

export default Slider;
