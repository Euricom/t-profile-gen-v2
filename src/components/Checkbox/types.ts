import React, { ReactNode } from 'react';

export interface CheckboxProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  labelText: ReactNode;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
