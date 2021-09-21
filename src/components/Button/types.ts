import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary';
}
