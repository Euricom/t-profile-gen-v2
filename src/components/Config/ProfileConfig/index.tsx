import * as React from 'react';
import styled from 'styled-components';
import { Checkbox, ColorPicker } from '../..';
import { ConfigContext } from '../../../contexts/config';

const Wrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

const ProfileConfig = (): JSX.Element => {
  const { asIs, fullName, skills } = React.useContext(ConfigContext);

  const test = (color: string) => {
    console.log(color);
  };

  return (
    <Wrapper>
      <Checkbox labelText="Show Full Name" name="showFullname" isChecked={fullName.show} />
      <ColorPicker ariaLabel="Full Name Color" color={fullName.color} onChange={test}>
        Full Name Color
      </ColorPicker>
    </Wrapper>
  );
};

export default ProfileConfig;
