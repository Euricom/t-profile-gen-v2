import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary';
}
