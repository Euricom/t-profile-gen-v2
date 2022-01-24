import React from 'react';
import * as S from './styles';

export interface SkillSetData {
  abbr: string;
  proficiency: number;
  skill: string;
}

interface LegendProps {
  skillsData: SkillSetData[];
}

const proficiencyValue = 25;

const Legend = ({ skillsData }: LegendProps): JSX.Element => (
  <S.Legend>
    {skillsData.map((skillsDataItem) => {
      if (skillsDataItem.skill && skillsDataItem.proficiency <= proficiencyValue) {
        return (
          <S.LegendItem key={skillsDataItem.abbr}>
            {skillsDataItem.abbr.toUpperCase()}: <span>{skillsDataItem.skill}</span>
          </S.LegendItem>
        );
      }
      return null;
    })}
  </S.Legend>
);

export default Legend;
