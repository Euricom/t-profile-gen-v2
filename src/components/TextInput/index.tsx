import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: ${({ theme }) => `1px solid ${theme.colors.neutral[900]}`};
  border-radius: 0px;
  box-sizing: border-box;
  font-size: 18px;
  padding: 4px 11px;

  &:focus {
    outline: none;
  }
`;

interface TextInputProps {
  'data-testid'?: string;
  onChange: (value: string) => void;
  value: string;
}

const TextInput = ({ 'data-testid': testid, onChange, value }: TextInputProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <StyledInput type="text" onChange={handleChange} data-testid={testid} value={value} />;
};

export default TextInput;
