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
  color: ${({ theme }) => theme.colors.neutral[50]};
  transform: scale(0.8);
`;

export const Checkbox = styled.div<Pick<CheckboxProps, 'isChecked'>>`
  background: ${({ theme, isChecked }) => (isChecked ? theme.colors.primary[500] : theme.colors.neutral[50])};
  border: ${({ theme }) => `1px solid ${theme.colors.neutral[100]}`};
  display: inline-block;
  height: 1rem;
  margin: 0.25rem 0;
  transition: all 300ms;
  width: 1rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.neutral[100]}`};
  }

  ${HiddenCheckbox}:disabled + & {
    background: ${({ theme }) => theme.colors.neutral[50]};
  }

  ${HiddenCheckbox}:disabled:checked + & {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  ${CheckboxIcon} {
    visibility: ${({ isChecked }) => (isChecked ? 'visible' : 'hidden')};
  }
`;

export const CheckboxLabel = styled.span<Pick<CheckboxProps, 'isDisabled'>>`
  margin: 0 0 0 0.5rem;
  color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.neutral[100] : theme.colors.neutral[900])};
`;
