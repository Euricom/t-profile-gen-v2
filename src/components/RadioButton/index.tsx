import * as React from 'react';
import * as S from './styles';
import { RadioButtonProps } from './types';

const RadioButton = ({ checked, label, onChange, id, ...rest }: RadioButtonProps): JSX.Element => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => onChange(event.target.value);

  return (
    <S.RadioContainer>
      <S.Label htmlFor={id}>
        <S.Radio checked={checked} />
        {label}
      </S.Label>
      <S.NativeRadio id={id} onChange={handleChange} checked={checked} {...rest} />
    </S.RadioContainer>
  );
};

export default RadioButton;
