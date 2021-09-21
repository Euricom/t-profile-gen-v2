import React from 'react';
import * as S from './styles';
import { ButtonProps } from './types';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }: ButtonProps): JSX.Element => (
  <S.Button onClick={(event) => onClick(event)} type={type} variant={variant}>
    {children}
  </S.Button>
);

export default Button;
