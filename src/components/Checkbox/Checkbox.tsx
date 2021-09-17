import React from 'react';
import * as S from './styles';
import { CheckboxProps } from './types';

const Checkbox = ({ isChecked = false, isDisabled = false, labelText, name, onChange }: CheckboxProps): JSX.Element => (
  <S.CheckboxContainer>
    <S.HiddenCheckbox
      checked={isChecked}
      disabled={isDisabled}
      name={name}
      onChange={(event) => onChange && onChange(event)}
    />
    <S.Checkbox isChecked={isChecked}>
      <S.CheckboxIcon>
        <path fill="none" stroke="currentColor" strokeWidth="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
      </S.CheckboxIcon>
    </S.Checkbox>
    <S.CheckboxLabel isDisabled={isDisabled}>{labelText}</S.CheckboxLabel>
  </S.CheckboxContainer>
);

export default Checkbox;
