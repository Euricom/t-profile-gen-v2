import styled from 'styled-components';

// TODO: add this to the button component
export const Button = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary[500]};
  cursor: pointer;

  :active {
    color: ${({ theme }) => theme.colors.primary[700]};
  }
  :hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }
  :focus {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.neutral[100]}`};
  }
`;
