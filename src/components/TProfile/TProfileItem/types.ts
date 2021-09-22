import React from 'react';

export interface TProfileItemProps {
  children: React.ReactNode;
  legend: React.ReactNode;
  scale: number;
  type: 'generalisme' | 'specialisme';
}
