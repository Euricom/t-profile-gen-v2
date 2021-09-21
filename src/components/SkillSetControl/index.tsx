import * as React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import Slider from '../Slider/Slider';

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

const Label = styled.label`
  width: 140px;
  flex-shrink: 0;
`;

interface SkillSetControlProps {
  id: string;
  label: string;
  onProficiencyChange: (proficiency: number) => void;
  onSkillChange: (skill: string) => void;
  proficiency: number;
  skill: string;
}

const SkillSetControl = ({
  id,
  label,
  onProficiencyChange,
  onSkillChange,
  proficiency,
  skill,
}: SkillSetControlProps): JSX.Element => {
  const handleSkillChange: React.ChangeEventHandler<HTMLInputElement> = (event) => onSkillChange(event.target.value);
  const handleProficiencyChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    onProficiencyChange(Number(event.target.value));

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} value={skill} onChange={handleSkillChange} />
      <Slider ariaLabel={label} value={proficiency} onChange={handleProficiencyChange} isDisabled={!skill} />
    </Wrapper>
  );
};

export default SkillSetControl;
