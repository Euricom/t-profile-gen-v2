import React from 'react';

export interface SliderProps {
  ariaLabel: string;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}
