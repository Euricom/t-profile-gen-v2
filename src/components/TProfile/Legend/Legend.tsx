import React from 'react';
import * as S from './styles';

const Legend = (): JSX.Element => {
  const SkillSetPlaceholder = {
    g1: { proficiency: 0, skill: 'React' },
    g2: { proficiency: 0, skill: 'Angular' },
    g3: { proficiency: 0, skill: 'Vue' },
    s1: { proficiency: 0, skill: 'Back-End' },
    s2: { proficiency: 0, skill: 'Devops' },
    s3: { proficiency: 0, skill: 'Data Science' },
  };

  const legendItems = Object.entries(SkillSetPlaceholder).map((legendItem) => {
    const abbr = legendItem[0];
    const { skill } = legendItem[1];

    return {
      abbr,
      skill,
    };
  });

  return (
    <S.Legend>
      {legendItems.map((legendItem) => (
        <S.LegendItem>
          {legendItem.abbr.toUpperCase()}: <span>{legendItem.skill}</span>
        </S.LegendItem>
      ))}
    </S.Legend>
  );
};

export default Legend;
