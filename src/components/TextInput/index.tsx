import styled from 'styled-components';

const TextInput = styled.input`
  border: ${({ theme }) => `1px solid ${theme.colors.neutral[900]}`};
  border-radius: 0px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 4px 11px;

  &:focus {
    outline: none;
  }
`;

export default TextInput;
