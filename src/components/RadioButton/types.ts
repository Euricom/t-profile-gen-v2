import * as React from 'react';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  checked: boolean;
  label: string;
  onChange: (checked: string) => void;
  value: string;
}
