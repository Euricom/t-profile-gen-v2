import React from 'react';

export interface CookieBannerProps {
  children: React.ReactNode;
  onAccept: () => void;
  onDecline: () => void;
}
