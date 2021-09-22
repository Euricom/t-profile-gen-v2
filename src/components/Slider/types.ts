import React from 'react';

export interface SliderProps {
  ariaLabel: string;
  isDisabled?: boolean;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}
