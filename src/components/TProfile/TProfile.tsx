import React from 'react';
import * as S from './styles';
import TProfileItem from './TProfileItem/TProfileItem';
import Legend from './Legend/Legend';
import { SkillContext } from '../../contexts/skills';

const BG_COLOR_PLACEHOLDER = 'red';
const BORDER_COLOR_PLACEHOLDER = 'blue';

const TProfile = (): JSX.Element => {
  const { skillSets } = React.useContext(SkillContext);

  const skillSetItems = Object.entries(skillSets).map((skillSetItem) => {
    const [abbr, { proficiency, skill }] = skillSetItem;

    return {
      abbr,
      proficiency,
      skill,
    };
  });

  return (
    <S.TProfileWrapper>
      <Legend />
      <S.GeneralisationWrapper>
        {skillSetItems.map((skillSetItem) => {
          if (skillSetItem.skill && skillSetItem.abbr.includes('gen')) {
            return (
              <TProfileItem
                border
                bgColor={BG_COLOR_PLACEHOLDER}
                borderColor={BORDER_COLOR_PLACEHOLDER}
                scale={skillSetItem.proficiency}
                legend={skillSetItem.abbr.toUpperCase()}
                type="generalisme"
              >
                {skillSetItem.skill}
              </TProfileItem>
            );
          }
          return null;
        })}
      </S.GeneralisationWrapper>
      <S.SpecialisationWrapper>
        {skillSetItems.map((skillSetItem) => {
          if (skillSetItem.skill && skillSetItem.abbr.includes('spec')) {
            return (
              <TProfileItem
                border
                bgColor={BG_COLOR_PLACEHOLDER}
                borderColor={BORDER_COLOR_PLACEHOLDER}
                scale={skillSetItem.proficiency}
                legend={skillSetItem.abbr.toUpperCase()}
                type="specialisme"
              >
                {skillSetItem.skill}
              </TProfileItem>
            );
          }
          return null;
        })}
      </S.SpecialisationWrapper>
    </S.TProfileWrapper>
  );
};

export default TProfile;
