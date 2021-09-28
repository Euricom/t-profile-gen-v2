import React from 'react';
import * as S from './styles';
import { LegendProps } from './types';

const proficiencyValue = 25;

const Legend = ({ skillsData }: LegendProps): JSX.Element => (
  <S.Legend>
    {skillsData.map((skillsDataItem) => {
      if (skillsDataItem.skill && skillsDataItem.proficiency <= proficiencyValue) {
        return (
          <S.LegendItem key={skillsDataItem.id}>
            {skillsDataItem.abbr.toUpperCase()}: <span>{skillsDataItem.skill}</span>
          </S.LegendItem>
        );
      }
      return null;
    })}
  </S.Legend>
);

export default Legend;
