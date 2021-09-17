import styled from 'styled-components';
import { CheckboxProps } from './types';

export const CheckboxContainer = styled.label`
  align-items: center;
  display: inline-flex;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxIcon = styled.svg.attrs({
  'aria-hidden': 'true',
  focusable: 'false',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  color: #fff;
  transform: scale(0.8);
`;

export const Checkbox = styled.div<Pick<CheckboxProps, 'isChecked'>>`
  background: ${({ isChecked }) => (isChecked ? '#4EB439' : '#FFFFFF')};
  border: #e4e4e4 solid 1px;
  display: inline-block;
  height: 1rem;
  margin: .25rem 0;
  transition: all 300ms;
  width: 1rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #e4e4e4;
  }

  ${HiddenCheckbox}:disabled + & {
    background: #fff;
  }

  ${HiddenCheckbox}:disabled:checked + & {
    background: #e4e4e4
  }

  ${CheckboxIcon} {
    visibility: ${({ isChecked }) => (isChecked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxLabel = styled.span<Pick<CheckboxProps, 'isDisabled'>>`
  margin: 0 0 0 0.5rem;
  color: ${({ isDisabled }) => (isDisabled ? '#c7c7c7' : '#000')};
`;
