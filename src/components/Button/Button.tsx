import React from 'react';
import * as S from './styles';
import { ButtonProps } from './types';

const Button = ({
  children,
  isDisabled = false,
  onClick,
  size = 'medium',
  type = 'button',
  variant = 'primary',
}: ButtonProps): JSX.Element => (
  <S.Button disabled={isDisabled} size={size} onClick={(event) => onClick(event)} type={type} variant={variant}>
    {children}
  </S.Button>
);

export default Button;
