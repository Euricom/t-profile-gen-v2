import React from 'react';
import * as S from './styles';
import { TProfileItemProps } from './types';

const TProfileItem = ({ children, legend, scale, type }: TProfileItemProps): JSX.Element => (
  <>
    <S.TProfileItem scale={scale} type={type}>
      {scale > 25 ? children : legend}
    </S.TProfileItem>
  </>
);

export default TProfileItem;
