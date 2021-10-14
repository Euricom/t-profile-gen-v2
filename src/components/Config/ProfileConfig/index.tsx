import * as React from 'react';
import * as S from './styles';
import { Checkbox, ColorPicker } from '../..';
import { ConfigContext } from '../../../contexts/config';
import RadioButton from '../../RadioButton';

const ProfileConfig = (): JSX.Element => {
  const { config, handleNameConfig, handleSkillsPreviewConfig, handleTProfileVersion } =
    React.useContext(ConfigContext);
  const { fullName, skills } = config;

  return (
    <S.Wrapper>
      <S.Title>T-Profile Settings</S.Title>
      <S.SettingsRow>
        <S.SettingsColumn>
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
        </S.SettingsColumn>
        <S.SettingsColumn>
          <ColorPicker
            ariaLabel="Fill Color"
            color={skills.color}
            onChange={(color: string) => handleSkillsPreviewConfig('changeBackgroundColor', color)}
          >
            Fill Color
          </ColorPicker>
          <Checkbox
            labelText="Show Border"
            name="showBorder"
            isChecked={skills.border.show}
            onChange={() => handleSkillsPreviewConfig('showBorder')}
          />
          <ColorPicker
            ariaLabel="Border Color"
            color={skills.border.color}
            onChange={(color: string) => handleSkillsPreviewConfig('changeBorderColor', color)}
          >
            Border Color
          </ColorPicker>
        </S.SettingsColumn>
        <S.SettingsColumn>
          <RadioButton
            id="asIs"
            checked={config.asIs}
            label="As-is"
            onChange={(version) => handleTProfileVersion(version)}
            value="As-is"
          />
          <RadioButton
            id="toBe"
            checked={!config.asIs}
            label="To-be"
            onChange={(version) => handleTProfileVersion(version)}
            value="To-be"
          />
        </S.SettingsColumn>
      </S.SettingsRow>
    </S.Wrapper>
  );
};

export default ProfileConfig;
