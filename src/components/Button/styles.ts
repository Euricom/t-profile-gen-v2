import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<Pick<ButtonProps, 'variant'>>`
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary[500] : theme.colors['euri-grey']};
  border: none;
  border-radius: 4px;
  color: ${({ theme, variant }) => (variant === 'primary' ? theme.colors.neutral[50] : theme.colors.primary[500])};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem;
  transition: all 300ms;
  padding: 1rem;

  :active {
    background-color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.primary[700] : theme.colors.neutral[300]};
  }

  :hover {
    background-color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.primary[600] : theme.colors.neutral[100]};
  }

  :focus {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.neutral[100]}`};
  }
`;
