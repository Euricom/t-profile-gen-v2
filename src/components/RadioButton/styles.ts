import styled from 'styled-components';
import { RadioButtonProps } from './types';

export const RadioContainer = styled.div`
  margin: 0.5rem 0;
`;

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  text-align: center;
`;

export const Radio = styled.span<Pick<RadioButtonProps, 'checked'>>`
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

export const NativeRadio = styled.input.attrs({ type: 'radio' })`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;
