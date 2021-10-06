import * as React from 'react';
import styled from 'styled-components';
import ProfileConfig from './ProfileConfig';
import Button from '../Button/Button';
import { ConfigProps } from './types';

const Vr = styled.div`
  border-right: solid 2px ${({ theme }) => theme.colors.primary[500]};
  flex-grow: 0;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['bg-grey']};
  border-top: solid 2px ${({ theme }) => theme.colors.primary[500]};
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary[500]};
  display: flex;
  height: 100%;
  padding: 16px 0;
`;

const TemplateDiv = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

// TODO: unit test Config component
const Config = ({ isExportDisabled, onExportClick }: ConfigProps): JSX.Element => (
  <Wrapper>
    <ProfileConfig />
    <Vr />
    <TemplateDiv>
      <Button isDisabled={isExportDisabled} onClick={() => onExportClick()}>
        Export
      </Button>
    </TemplateDiv>
  </Wrapper>
);

export default Config;
