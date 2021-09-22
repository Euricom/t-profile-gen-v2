import React from 'react';
import TProfileItem from './TProfileItem/TProfileItem';
import * as S from './styles';
import { Slider } from '../index';

// scale
// rotation
// fill color
// border visible
// border color

const TProfile = (): JSX.Element => {
  const [boxSize, setBoxSize] = React.useState<number>(10);
  const [boxSize1, setBoxSize1] = React.useState<number>(10);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxSize(Number(event.currentTarget.value));
  };

  const handleSlider2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxSize1(Number(event.currentTarget.value));
  };

  return (
    <>
      <Slider ariaLabel="Test slider 1" onChange={handleSlider} value={boxSize} />
      <Slider ariaLabel="Test slider 2" onChange={handleSlider2} value={boxSize1} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <TProfileItem scale={boxSize} legend="G1" type="generalisme">
          React
        </TProfileItem>
        <TProfileItem scale={boxSize} legend="G1" type="generalisme">
          React
        </TProfileItem>
      </div>
      <S.SpecialisationWrapper>
        <TProfileItem scale={boxSize1} legend="G2" type="specialisme">
          Back-End Development
        </TProfileItem>
      </S.SpecialisationWrapper>
    </>
  );
};

export default TProfile;
