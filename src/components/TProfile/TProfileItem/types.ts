import React from 'react';

export interface TProfileItemProps {
  bgColor?: string;
  border?: boolean;
  borderColor?: string;
  children: React.ReactNode;
  legend: React.ReactNode;
  scale: number;
  type: 'generalisme' | 'specialisme';
}
