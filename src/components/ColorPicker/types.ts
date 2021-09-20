import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ColorPickerProps {
  children: ReactNode;
  color: string;
  onChange: Dispatch<SetStateAction<string>>;
}
