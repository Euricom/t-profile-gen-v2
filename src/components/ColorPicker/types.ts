import { ReactNode } from 'react';

export interface ColorPickerProps {
  ariaLabel: string;
  children: ReactNode;
  color: string;
  onChange: (color: string) => void;
}
