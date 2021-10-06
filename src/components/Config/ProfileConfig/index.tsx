import * as React from 'react';
import * as S from './styles';
import { Checkbox, ColorPicker } from '../..';
import { ConfigContext } from '../../../contexts/config';

const ProfileConfig = (): JSX.Element => {
  const { config, handleNameConfig } = React.useContext(ConfigContext);
  const { fullName } = config;

  return (
    <S.Wrapper>
      <Checkbox
        labelText="Show Full Name"
        name="showFullname"
        isChecked={fullName.show}
        onChange={() => handleNameConfig('changeName')}
      />
      <ColorPicker
        ariaLabel="Full Name Color"
        color={fullName.color}
        onChange={(color: string) => handleNameConfig('changeColor', color)}
      >
        Full Name Color
      </ColorPicker>
    </S.Wrapper>
  );
};

export default ProfileConfig;
