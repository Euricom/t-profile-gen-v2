import React from 'react';
import * as S from './styles';
import { HeaderProps } from './types';

const Header = ({ children }: HeaderProps): JSX.Element => (
  <S.HeaderWrapper>
    <S.HeaderTitle>{children}</S.HeaderTitle>
  </S.HeaderWrapper>
);

export default Header;
