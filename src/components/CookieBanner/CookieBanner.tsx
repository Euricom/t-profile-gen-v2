import React from 'react';
import * as S from './styles';
import { CookieBannerProps } from './types';
import Button from '../Button/Button';

const CookieBanner = ({ children, onAccept, onDecline }: CookieBannerProps): JSX.Element => (
  <S.CookieBanner data-testid="cookie-banner">
    <S.CookieBannerTextContainer>{children}</S.CookieBannerTextContainer>
    <S.CookieBannerActionContainer>
      <Button onClick={() => onDecline()} variant="secondary">
        Decline
      </Button>
      <Button onClick={() => onAccept()}>Accept</Button>
    </S.CookieBannerActionContainer>
  </S.CookieBanner>
);

export default CookieBanner;
