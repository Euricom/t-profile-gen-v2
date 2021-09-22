import React from 'react';
import * as S from './styles';
import TProfileItem from './TProfileItem/TProfileItem';

const BG_COLOR_PLACEHOLDER = 'red';
const BORDER_COLOR_PLACEHOLDER = 'blue';

const TProfile = (): JSX.Element => (
  <S.TProfileWrapper>
    <S.GeneralisationWrapper>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={80}
        legend="G1"
        type="generalisme"
      >
        React
      </TProfileItem>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={50}
        legend="G2"
        type="generalisme"
      >
        Angular
      </TProfileItem>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={90}
        legend="G3"
        type="generalisme"
      >
        Vue
      </TProfileItem>
    </S.GeneralisationWrapper>

    <S.SpecialisationWrapper>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={70}
        legend="S1"
        type="specialisme"
      >
        Back-End
      </TProfileItem>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={30}
        legend="S2"
        type="specialisme"
      >
        Devops
      </TProfileItem>
      <TProfileItem
        border
        bgColor={BG_COLOR_PLACEHOLDER}
        borderColor={BORDER_COLOR_PLACEHOLDER}
        scale={78}
        legend="S3"
        type="specialisme"
      >
        Data Science
      </TProfileItem>
    </S.SpecialisationWrapper>
  </S.TProfileWrapper>
);

export default TProfile;
