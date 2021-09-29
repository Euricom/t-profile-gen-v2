import React from 'react';
import * as S from './styles';
import { NamePreviewProps } from './types';

const NamePreview = ({ children, state }: NamePreviewProps): JSX.Element => (
  <>
    <S.NamePreviewWrapper>
      <S.NamePreviewName>{children}</S.NamePreviewName>
      <S.NamePreviewState>{state}</S.NamePreviewState>
    </S.NamePreviewWrapper>
  </>
);

export default NamePreview;
