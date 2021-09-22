import styled from 'styled-components';
import { TProfileItemProps } from './types';

export const TProfileItem = styled.div<Pick<TProfileItemProps, 'scale' | 'type'>>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  height: 3rem;
  justify-content: center;
  width: ${({ scale }) => `${scale}%`};
  margin: ${({ type }) => (type === 'generalisme' ? '0 auto' : '0')};
`;
