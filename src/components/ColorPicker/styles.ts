import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';

// color picker
export const ColorPickerContainer = styled.div`
  margin: 0.5rem 0;
  position: relative;
`;

export const ColorPicker = styled.div`
  align-items: center;
  display: flex;
`;

export const ColorPickerSwatch = styled.button.attrs({ type: 'button' })`
  background: ${({ color }) => color};
  background-clip: content-box;
  background-size: 0.5rem;
  border: ${({ theme }) => `1px solid ${theme.colors.neutral[100]}`};
  cursor: pointer;
  height: 1.1rem;
  padding: 0.1rem;
  transition: all 300ms;
  width: 1.1rem;

  :focus {
    box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.neutral[100]}`};
    outline: none;
  }
`;

export const ColorPickerLabel = styled.span`
  cursor: pointer;
  margin: 0 0 0 0.5rem;
`;

// color picker popover container
export const ColorPickerPopoverContainer = styled.div`
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  z-index: 1;
`;

// overrides of default styles for react-colorful colorPicker
export const ColorPickerPopover = styled(HexColorPicker)`
  .react-colorful__saturation,
  .react-colorful__last-control {
    border-radius: 0;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer,
  .react-colorful__saturation-pointer {
    border-radius: 0;
    width: 16px;
  }

  .react-colorful__saturation-pointer {
    height: 16px;
  }
`;

export const ColorPickerPopoverSwatchesContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
`;

export const ColorPickerPopoverSwatch = styled.button.attrs({ type: 'button' })`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 16px;
  margin: 4px;
  outline: none;
  padding: 0;
  width: 16px;
`;
