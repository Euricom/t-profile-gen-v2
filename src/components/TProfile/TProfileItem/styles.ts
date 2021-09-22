import styled from 'styled-components';
import { TProfileItemProps } from './types';

const SCALE_ANIMATION_TIME = '2s';

// !outline instead of border as fix for overlapping borders

export const TProfileItem = styled.div<
  Pick<TProfileItemProps, 'bgColor' | 'border' | 'borderColor' | 'scale' | 'type'>
>`
  align-items: center;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary[500]};
  outline: 1px solid ${({ borderColor, theme }) => borderColor || theme.colors.neutral[900]};
  outline: ${({ border, borderColor, theme }) => {
    if (border) {
      return `1px solid ${borderColor || theme.colors.neutral[900]}}`;
    }
    return 'initial';
  }};
  color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  height: ${({ scale, type }) => (type === 'generalisme' ? '3rem' : `${scale}%`)};
  justify-content: center;
  width: ${({ scale, type }) => (type === 'generalisme' ? `${scale}%` : '3rem')};
  margin: ${({ type }) => (type === 'generalisme' ? '1px auto' : '0 1px')};
  writing-mode: ${({ type }) => (type === 'generalisme' ? 'initial' : 'vertical-rl')};
  transition: all ${SCALE_ANIMATION_TIME};
`;
