import React from 'react';
import * as S from './styles'


interface SliderProps {
  ariaLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const Slider = ({ ariaLabel, onChange, value }: SliderProps): JSX.Element => (
  <S.Slider aria-label={ariaLabel} onChange={(event) => onChange(event)} value={value} />
);

export default Slider;
