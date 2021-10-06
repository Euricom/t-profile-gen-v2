import React from 'react';
import * as S from './styles';
import { NamePreviewProps } from './types';

const NamePreview = ({ children, color, state }: NamePreviewProps): JSX.Element => (
  <>
    <S.NamePreviewWrapper>
      <S.NamePreviewName colorName={color}>{children}</S.NamePreviewName>
      <S.NamePreviewState>{state}</S.NamePreviewState>
    </S.NamePreviewWrapper>
  </>
);

export default NamePreview;
