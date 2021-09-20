import React from 'react';
import { useTheme } from 'styled-components';
import * as S from './styles';
import { ColorPickerProps } from './types';
import { useClickOutside } from '../../hooks';

const ColorPicker = ({ children, color, onChange }: ColorPickerProps): JSX.Element => {
  const theme = useTheme();
  const popoverElement = React.useRef<null | HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const close = React.useCallback(() => setIsOpen(false), []);

  useClickOutside(popoverElement, close);

  const colorPresets = [`${theme.colors.primary[500]}`, `${theme.colors.neutral[100]}`, `${theme.colors.neutral[900]}`];

  return (
    <S.ColorPickerContainer>
      <S.ColorPicker>
        <S.ColorPickerSwatch color={color} onClick={() => setIsOpen(true)} />
        <S.ColorPickerLabel onClick={() => setIsOpen(true)}>{children}</S.ColorPickerLabel>
      </S.ColorPicker>

      {isOpen && (
        <S.ColorPickerPopoverContainer ref={popoverElement}>
          <S.ColorPickerPopover color={color} onChange={onChange} />
          <S.ColorPickerPopoverSwatchesContainer>
            {colorPresets.map((colorPreset) => (
              <S.ColorPickerPopoverSwatch
                color={colorPreset}
                key={colorPreset}
                onClick={() => {
                  onChange(colorPreset);
                  setIsOpen(false);
                }}
              />
            ))}
          </S.ColorPickerPopoverSwatchesContainer>
        </S.ColorPickerPopoverContainer>
      )}
    </S.ColorPickerContainer>
  );
};

export default ColorPicker;
