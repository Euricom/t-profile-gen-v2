import React from 'react';
import * as S from './styles';

const proficiencyValue = 25;

const Legend = (): JSX.Element => {
  const SkillSetPlaceholder = {
    g1: { proficiency: 25, skill: 'React' },
    g2: { proficiency: 24, skill: 'Angular' },
    g3: { proficiency: 100, skill: 'Vue' },
    s1: { proficiency: 40, skill: 'Back-End' },
    s2: { proficiency: 10, skill: 'Devops' },
    s3: { proficiency: 0, skill: 'Data Science' },
  };

  const legendItems = Object.entries(SkillSetPlaceholder).map((legendItem) => {
    const abbr = legendItem[0];
    const { proficiency, skill } = legendItem[1];

    return {
      abbr,
      proficiency,
      skill,
    };
  });

  return (
    <S.Legend>
      {legendItems.map((legendItem) => {
        if (legendItem.skill && legendItem.proficiency >= proficiencyValue) {
          return (
            <S.LegendItem key={legendItem.abbr}>
              {legendItem.abbr.toUpperCase()}: <span>{legendItem.skill}</span>
            </S.LegendItem>
          );
        }
        return null;
      })}
    </S.Legend>
  );
};

export default Legend;
