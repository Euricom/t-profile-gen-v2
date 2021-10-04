/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import styled from 'styled-components';
import * as S from './styles';
import { SkillSetControl } from '..';
import { isSkillType, Skill, SkillContext } from '../../contexts/skills';
import { Label } from '../SkillSetControl';
import TextInput from '../TextInput';

const FullNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledLabel = styled(Label)`
  display: inline-block;
  margin-right: 10px;
`;

const controlLabels: Record<Skill, string> = {
  g1: 'Generalisme 1',
  g2: 'Generalisme 2',
  g3: 'Generalisme 3',
  s1: 'Specialisme 1',
  s2: 'Specialisme 2',
  s3: 'Specialisme 3',
};

const Skills = (): JSX.Element => {
  const { fullName, changeFullName, changeProficiency, changeSkill, resetProfile, skillSets } =
    React.useContext(SkillContext);

  const handleFullNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    changeFullName(event.target.value);

  const handleClearClick = () => resetProfile();

  const controls = Object.entries(controlLabels).map((keyVal) => {
    const [skill, label] = keyVal;
    isSkillType(skill);

    return (
      <SkillSetControl
        label={label}
        id={skill}
        name={skill}
        skill={skillSets[skill].skill}
        proficiency={skillSets[skill].proficiency}
        onSkillChange={changeSkill}
        onProficiencyChange={changeProficiency}
        key={skill}
      />
    );
  });

  return (
    <>
      <FullNameWrapper>
        <div>
          <StyledLabel htmlFor="fullname">Full Name</StyledLabel>
          <TextInput id="fullname" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div>
          <S.Button>Sort</S.Button>
          <S.Button onClick={handleClearClick}>Clear</S.Button>
        </div>
      </FullNameWrapper>
      {controls}
    </>
  );
};

export default Skills;
