import * as React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Slider from '../Slider/Slider';
import { isSkillType, Skill } from '../../contexts/skills';

const Wrapper = styled.div`
  align-items: center;
  display: flex;

  & > * {
    margin-right: 10px;
  }

  & > :last-child {
    margin-right: 0;
  }
`;

export const Label = styled.label`
  width: 140px;
  flex-shrink: 0;
`;

interface SkillSetControlProps {
  id: string;
  label: string;
  name?: Skill;
  onProficiencyChange: (name: Skill, proficiency: number) => void;
  onSkillChange: (name: Skill, skill: string) => void;
  proficiency: number;
  skill: string;
}

const SkillSetControl = ({
  id,
  label,
  name,
  onProficiencyChange,
  onSkillChange,
  proficiency,
  skill,
}: SkillSetControlProps): JSX.Element => {
  const handleSkillChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    isSkillType(event.target.name);

    onSkillChange(event.target.name, event.target.value);
  };

  const handleProficiencyChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    isSkillType(event.target.name);

    onProficiencyChange(event.target.name, Number(event.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} value={skill} onChange={handleSkillChange} name={name} />
      <Slider
        ariaLabel={label}
        value={proficiency}
        onChange={handleProficiencyChange}
        isDisabled={!skill}
        name={name}
      />
    </Wrapper>
  );
};

export default SkillSetControl;
