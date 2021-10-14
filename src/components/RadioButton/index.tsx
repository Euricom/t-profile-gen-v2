import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  text-align: center;
`;

const Radio = styled.span<Pick<RadioButtonProps, 'checked'>>`
  background-clip: content-box;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary[500] : 'transparent')};
  border: solid 1px ${({ theme }) => theme.colors['euri-grey']};
  border-radius: 50%;
  content: '';
  cursor: pointer;
  display: inline-block;
  height: 20px;
  margin-right: 17px;
  padding: 2px;
  width: 20px;
`;

const NativeRadio = styled.input.attrs({ type: 'radio' })`
  height: 0px;
  opacity: 0;
  position: absolute;
  width: 0px;
`;

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  checked: boolean;
  label: string;
  onChange: (checked: string) => void;
  value: string;
}

const RadioButton = ({ checked, label, onChange, id, ...rest }: RadioButtonProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => onChange(event.target.value);

  return (
    <div>
      <Label htmlFor={id}>
        <Radio checked={checked} />
        {label}
      </Label>
      <NativeRadio id={id} onChange={handleChange} checked={checked} {...rest} />
    </div>
  );
};

export default RadioButton;
